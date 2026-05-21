"use client";

import {
  useEffect,
  useState,
} from "react";

import { Recommendation } from "@/types/recommendation.types";

import { recommendationService } from "@/services/recommendation.service";

export function useRecommendations() {

  const [
    recommendations,
    setRecommendations,
  ] = useState<
    Recommendation[]
  >([]);

  useEffect(() => {

    async function load() {

      const data =
        await recommendationService.getAll();

      setRecommendations(data);
    }

    load();

  }, []);

  return {
    recommendations,
  };
}