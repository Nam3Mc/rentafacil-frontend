import { create } from "zustand";

import { persist } from "zustand/middleware";

import propertiesData from "@/data/properties.json";

import { Property } from "@/types/property.types";

interface PropertyStore {

  properties: Property[];

  addProperty:
    (property: Property) => void;

  updateProperty:
    (property: Property) => void;

  deleteProperty:
    (propertyId: string) => void;
}

export const usePropertyStore =
  create<PropertyStore>()(

    persist(

      (set) => ({

        properties:
          propertiesData as Property[],

        addProperty:
          (property) =>
            set((state) => {
              const exists =
                state.properties.some(
                  (item) =>
                    item.id === property.id
                );
              
              if (exists) {
                return {
                  properties:
                    state.properties.map(
                      (item) =>
                        item.id === property.id
                          ? property
                          : item
                    ),
                };
              }
            
              return {
                properties: [
                  property,
                  ...state.properties,
                ],
              };
            }),

        updateProperty:
          (updatedProperty) =>
            set((state) => ({
              properties:
                state.properties.map(
                  (property) =>
                    property.id ===
                    updatedProperty.id
                      ? updatedProperty
                      : property
                ),
            })),

        deleteProperty:
          (propertyId) =>
            set((state) => ({
              properties:
                state.properties.filter(
                  (property) =>
                    property.id !==
                    propertyId
                ),
            })),

      }),

      {
        name:
          "rentafacil-properties",
      }

    )

  );