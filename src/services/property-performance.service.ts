import { propertyPerformanceMock } from "@/services/mocks/property-performance.mock";

export const propertyPerformanceService = {

  async getAll() {
    return propertyPerformanceMock.getAll();
  },

  async getByPropertyId(
    propertyId: string
  ) {
    return propertyPerformanceMock.getByPropertyId(
      propertyId
    );
  },

};