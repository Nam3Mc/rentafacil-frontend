"use client";

import {
  createContext,
  useContext,
  useEffect,
} from "react";

import {
  useForm,
  FormProvider,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  propertyDraftSchema,
  PropertyDraftSchema,
} from "@/validations/property.validation";

import { usePropertyPublicationStore } from "@/store/property-publication.store";

interface PropertyFormProviderProps {
  children: React.ReactNode;
  initialValues?: Partial<PropertyDraftSchema>;
  mode?: "create" | "edit";
}

const PropertyFormContext =
  createContext<
    ReturnType<
      typeof useForm<PropertyDraftSchema>
    > | null
  >(null);

export function PropertyFormProvider({
  children,
  initialValues,
  mode = "create",
}: PropertyFormProviderProps) {
  const {
    draft,
    updateDraft,
  } =
    usePropertyPublicationStore();

  const defaultValues: PropertyDraftSchema = {
    id: initialValues?.id || "",
    slug: initialValues?.slug || "",
    title: initialValues?.title || "",
    description:
      initialValues?.description || "",
    type: initialValues?.type || "",
    monthlyPrice:
      initialValues?.monthlyPrice || 0,
    bedrooms: initialValues?.bedrooms || 0,
    bathrooms:
      initialValues?.bathrooms || 0,
    area: initialValues?.area || 0,
    city: initialValues?.city || "",
    address: initialValues?.address || "",
    images: initialValues?.images || [],
    verificationDocuments:
      initialValues?.verificationDocuments || [],
    status: initialValues?.status || "draft",
  };

  const methods =
    useForm<PropertyDraftSchema>({
      resolver: zodResolver(
        propertyDraftSchema
      ),
      defaultValues,
      mode: "onChange",
    });

  useEffect(() => {
    if (mode === "edit") {
      methods.reset(defaultValues);
      updateDraft(defaultValues);
      return;
    }

    if (
      mode === "create" &&
      draft.title
    ) {
      methods.reset(draft);
    }
  }, []);

  useEffect(() => {
    const subscription =
      methods.watch((values) => {
        updateDraft(
          values as PropertyDraftSchema
        );
      });

    return () =>
      subscription.unsubscribe();
  }, [methods, updateDraft]);

  return (
    <PropertyFormContext.Provider
      value={methods}
    >
      <FormProvider {...methods}>
        {children}
      </FormProvider>
    </PropertyFormContext.Provider>
  );
}

export function usePropertyForm() {
  const context = useContext(
    PropertyFormContext
  );

  if (!context) {
    throw new Error(
      "usePropertyForm must be used inside PropertyFormProvider"
    );
  }

  return context;
}