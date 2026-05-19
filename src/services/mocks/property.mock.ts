import properties from "@/data/properties.json";

import { Property } from "@/types/property.types";

export const propertyMock = {
  async getAll(): Promise<Property[]> {
    return properties;
  },

  async getFeatured(): Promise<Property[]> {
    return properties.filter(
      (property) => property.isFeatured
    );
  },

  async getById(
    id: string
  ): Promise<Property | undefined> {
    return properties.find(
      (property) => property.id === id
    );
  },
};