"use client";

import { useEffect, useState } from "react";

import { propertyService } from "@/services/property.service";

import { Property } from "@/types/property.types";

export function useProperties() {
  const [properties, setProperties] = useState<
    Property[]
  >([]);

  useEffect(() => {
    async function loadProperties() {
      const data =
        await propertyService.getAll();

      setProperties(data);
    }

    loadProperties();
  }, []);

  return {
    properties,
  };
}