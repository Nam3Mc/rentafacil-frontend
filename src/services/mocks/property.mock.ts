import properties from "@/data/properties.json";

import { Property } from "@/types/property.types";

let runtimeProperties =
  [...properties] as Property[];

export const propertyMock = {

  async getAll():
    Promise<Property[]> {

    return runtimeProperties;
  },

  async getFeatured():
    Promise<Property[]> {

    return runtimeProperties.filter(
      (property) =>
        property.isFeatured
    );
  },

  async getBySlug(
    slug: string
  ): Promise<Property | undefined> {

    return runtimeProperties.find(
      (property) =>
        property.slug === slug
    );
  },

  async getById(
    id: string
  ): Promise<Property | undefined> {

    return runtimeProperties.find(
      (property) =>
        property.id === id
    );
  },

  async getByOwnerId(
    ownerId: string
  ): Promise<Property[]> {

    return runtimeProperties.filter(
      (property) =>
        property.ownerId === ownerId
    );
  },

  async create(
    property: Property
  ): Promise<Property> {

    runtimeProperties = [
      property,
      ...runtimeProperties,
    ];

    return property;
  },

  async update(
    updatedProperty: Property
  ): Promise<Property> {

    runtimeProperties =
      runtimeProperties.map(
        (property) =>
          property.id ===
          updatedProperty.id
            ? updatedProperty
            : property
      );

    return updatedProperty;
  },

  async delete(
    propertyId: string
  ): Promise<void> {

    runtimeProperties =
      runtimeProperties.filter(
        (property) =>
          property.id !== propertyId
      );
  },

};