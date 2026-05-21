"use client";

import {
  useEffect,
  useState,
} from "react";

import { PropertyPerformance } from "@/types/property-performance.types";

import { propertyPerformanceService } from "@/services/property-performance.service";

export function usePropertyPerformances() {

  const [
    performances,
    setPerformances,
  ] = useState<
    PropertyPerformance[]
  >([]);

  useEffect(() => {

    async function load() {

      const data =
        await propertyPerformanceService.getAll();

      setPerformances(data);
    }

    load();

  }, []);

  return {
    performances,
  };
}