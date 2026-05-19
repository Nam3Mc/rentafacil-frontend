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
}

const PropertyFormContext =
  createContext<
    ReturnType<
      typeof useForm<PropertyDraftSchema>
    > | null
  >(null);

export function PropertyFormProvider({
  children,
}: PropertyFormProviderProps) {
  const draft =
    usePropertyPublicationStore(
      (state) => state.draft
    );

  const methods =
    useForm<PropertyDraftSchema>({
      resolver: zodResolver(
        propertyDraftSchema
      ),

      defaultValues: {
        title: "",

        description: "",

        city: "",

        address: "",

        monthlyPrice: 0,

        bedrooms: 0,

        bathrooms: 0,

        area: 0,
      },

      mode: "onChange",
    });

  const { reset } = methods;

  useEffect(() => {
    reset({
      title: draft.title,

      description:
        draft.description,

      city: draft.city,

      address: draft.address,

      monthlyPrice:
        draft.monthlyPrice,

      bedrooms: draft.bedrooms,

      bathrooms: draft.bathrooms,

      area: draft.area,
    });
  }, [draft, reset]);

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