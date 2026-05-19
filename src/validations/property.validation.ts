import { z } from "zod";

export const propertyDraftSchema =
  z.object({
    title: z
      .string()
      .min(
        10,
        "El título debe tener al menos 10 caracteres."
      ),

    description: z
      .string()
      .min(
        30,
        "La descripción debe tener al menos 30 caracteres."
      ),

    city: z
      .string()
      .min(
        2,
        "La ciudad es requerida."
      ),

    address: z
      .string()
      .min(
        5,
        "La dirección es requerida."
      ),

    monthlyPrice: z
      .number()
      .min(
        1,
        "El precio debe ser mayor a 0."
      ),

    bedrooms: z
      .number()
      .min(
        1,
        "Debe existir al menos una habitación."
      ),

    bathrooms: z
      .number()
      .min(
        1,
        "Debe existir al menos un baño."
      ),

    area: z
      .number()
      .min(
        1,
        "El área debe ser válida."
      ),
  });

export type PropertyDraftSchema =
  z.infer<
    typeof propertyDraftSchema
  >;