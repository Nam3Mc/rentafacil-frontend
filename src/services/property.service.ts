import { usePropertyStore } from "@/store/property.store";

import { Property } from "@/types/property.types";

export const propertyService = {
  async getAll() {
    return usePropertyStore
      .getState()
      .properties;
  },

  async getFeatured() {
    return usePropertyStore
      .getState()
      .properties.filter(
        (property) =>
          property.isFeatured
      );
  },

  async getById(id: string) {
    return usePropertyStore
      .getState()
      .properties.find(
        (property) =>
          property.id === id
      );
  },

  async getBySlug(slug: string) {
    return usePropertyStore
      .getState()
      .properties.find(
        (property) =>
          property.slug === slug
      );
  },

  async create(
    property: Property
  ) {
    usePropertyStore
      .getState()
      .addProperty(property);

    return property;
  },

  async update(
    property: Property
  ) {
    usePropertyStore
      .getState()
      .updateProperty(property);

    return property;
  },

  async delete(
    propertyId: string
  ) {
    usePropertyStore
      .getState()
      .deleteProperty(
        propertyId
      );

    return true;
  },

  async getByOwnerId(
    ownerId: string
  ) {
    return usePropertyStore
      .getState()
      .properties.filter(
        (property) =>
          property.ownerId ===
          ownerId
      );
  },
};