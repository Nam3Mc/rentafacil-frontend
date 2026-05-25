"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  propertyDraftSchema,
  PropertyDraftSchema,
} from "@/validations/property.validation";

import { usePropertyPublicationStore } from "@/store/property-publication.store";
import { PropertyStatus, PropertyType } from "@/types/property.types";

interface PropertyFormProviderProps {
  children: React.ReactNode;
  initialValues?: Partial<PropertyDraftSchema>;
  mode?: "create" | "edit";
}

const PropertyFormContext =
  createContext<ReturnType<typeof useForm<PropertyDraftSchema>> | null>(null);

const propertyTypes: PropertyType[] = [
  "apartment",
  "house",
  "studio",
  "room",
  "commercial",
  "office",
  "land",
];

const propertyStatuses: PropertyStatus[] = [
  "draft",
  "pending_verification",
  "active",
  "paused",
  "rented",
  "archived",
];

function getPropertyType(type?: string): PropertyType | "" {
  if (propertyTypes.includes(type as PropertyType)) {
    return type as PropertyType;
  }

  return "";
}

function getPropertyStatus(status?: string): PropertyStatus {
  if (propertyStatuses.includes(status as PropertyStatus)) {
    return status as PropertyStatus;
  }

  return "draft";
}

export function PropertyFormProvider({
  children,
  initialValues,
  mode = "create",
}: PropertyFormProviderProps) {
  const { draft, updateDraft } = usePropertyPublicationStore();

  const defaultValues: PropertyDraftSchema = useMemo(
    () => ({
      id: initialValues?.id || "",
      slug: initialValues?.slug || "",
      title: initialValues?.title || "",
      description: initialValues?.description || "",
      type: getPropertyType(initialValues?.type),
      monthlyPrice: initialValues?.monthlyPrice || 0,
      bedrooms: initialValues?.bedrooms || 0,
      bathrooms: initialValues?.bathrooms || 0,
      area: initialValues?.area || 0,
      city: initialValues?.city || "",
      address: initialValues?.address || "",
      images: initialValues?.images || [],
      verificationDocuments: initialValues?.verificationDocuments || [],
      status: getPropertyStatus(initialValues?.status),
    }),
    [initialValues]
  );

  const methods = useForm<PropertyDraftSchema>({
    resolver: zodResolver(propertyDraftSchema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    if (mode === "edit") {
      methods.reset(defaultValues);

      updateDraft({
        ...defaultValues,
        type: getPropertyType(defaultValues.type),
        status: getPropertyStatus(defaultValues.status),
      });
      return;
    }

    if (mode === "create" && draft.title) {
      methods.reset({
        ...draft,
        type: getPropertyType(draft.type),
        status: getPropertyStatus(draft.status),
      });
    }

  }, [mode, methods, defaultValues, updateDraft, draft]);

  useEffect(() => {
    const subscription = methods.watch((values) => {
      updateDraft({
        ...values,
        type: getPropertyType(values.type),
        status: getPropertyStatus(values.status),
      });
    });
  
    return () => subscription.unsubscribe();
  }, [methods, updateDraft]);

  return (
    <PropertyFormContext.Provider value={methods}>
      <FormProvider {...methods}>{children}</FormProvider>
    </PropertyFormContext.Provider>
  );
}

export function usePropertyForm() {
  const context = useContext(PropertyFormContext);

  if (!context) {
    throw new Error("usePropertyForm must be used inside PropertyFormProvider");
  }

  return context;
}