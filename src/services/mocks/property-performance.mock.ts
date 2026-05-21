import performances from "@/data/property-performances.json";

import { PropertyPerformance } from "@/types/property-performance.types";

export const propertyPerformanceMock = {

  async getAll():
    Promise<PropertyPerformance[]> {

    return performances;
  },

  async getByPropertyId(
    propertyId: string
  ): Promise<
    PropertyPerformance | undefined
  > {

    return performances.find(
      (performance) =>
        performance.propertyId ===
        propertyId
    );
  },

};