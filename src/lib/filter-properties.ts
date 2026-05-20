import { Property } from "@/types/property.types";

interface FilterOptions {
  search: string;

  selectedType: string;
}

export function filterProperties(
  properties: Property[],
  options: FilterOptions
) {
  return properties.filter(
    (property) => {
      const matchesSearch =
        property.title
          .toLowerCase()
          .includes(
            options.search.toLowerCase()
          ) ||
        property.city
          .toLowerCase()
          .includes(
            options.search.toLowerCase()
          );

      const matchesType =
        options.selectedType ===
          "all" ||
        property.type ===
          options.selectedType;

      return (
        matchesSearch &&
        matchesType
      );
    }
  );
}