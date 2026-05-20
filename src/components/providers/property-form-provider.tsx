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

  const methods =
    useForm<PropertyDraftSchema>({
      resolver: zodResolver(
        propertyDraftSchema
      ),

      defaultValues: {
        title:
          initialValues?.title || "",

        description:
          initialValues?.description ||
          "",

        city:
          initialValues?.city || "",

        address:
          initialValues?.address || "",

        monthlyPrice:
          initialValues?.monthlyPrice ||
          0,

        bedrooms:
          initialValues?.bedrooms || 0,

        bathrooms:
          initialValues?.bathrooms || 0,

        area:
          initialValues?.area || 0,
      },

      mode: "onChange",
    });

  useEffect(() => {
    if (
      mode === "create" &&
      draft.title
    ) {
      methods.reset(draft);
    }
  }, []);

  useEffect(() => {
    if (mode !== "create") {
      return;
    }

    const subscription =
      methods.watch((values) => {
        updateDraft(
          values as PropertyDraftSchema
        );
      });

    return () =>
      subscription.unsubscribe();
  }, [methods, updateDraft, mode]);

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