import { propertyMock } from "@/services/mocks/property.mock";
import { Property } from "@/types/property.types";

export const propertyService = {
  async getAll() {
    return propertyMock.getAll();
  },

  async getFeatured() {
    return propertyMock.getFeatured();
  },

  async getById(id: string) {
    return propertyMock.getById(id);
  },

  async getBySlug(slug: string) {
    return propertyMock.getBySlug(slug);
  },

  async create(
    property: Property
  ) {

    return propertyMock.create(
      property
    );
  },

  async update(
    property: Property
  ) {

    return propertyMock.update(
      property
    );
  },

  async delete(
    propertyId: string
  ) {

    return propertyMock.delete(
      propertyId
    );
  },

  async getByOwnerId(
    ownerId: string
  ) {

    const properties =
      await propertyMock.getAll();

    return properties.filter(
      (property) =>
        property.ownerId ===
        ownerId
    );
  },
};