import { propertyMock } from "@/services/mocks/property.mock";

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
};