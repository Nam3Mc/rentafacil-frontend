"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  propertyService,
} from "@/services/property.service";

import {
  useAuthStore,
} from "@/store/auth.store";

import {
  usePropertySubmissionStore,
} from "@/store/property-submission.store";

import {
  Property,
} from "@/types/property.types";

export function useOwnerProperties() {

  const {
    user,
  } =
    useAuthStore();

  const {
    isSuccess,
  } =
    usePropertySubmissionStore();

  const [
    properties,
    setProperties,
  ] =
    useState<Property[]>([]);

  const [
    isLoading,
    setIsLoading,
  ] =
    useState(true);

  useEffect(() => {

    async function load() {

      if (!user) {
        return;
      }

      try {

        const data =
          await propertyService.getByOwnerId(
            user.id
          );

        setProperties(data);

      } catch (error) {

        console.error(error);

      } finally {

        setIsLoading(false);

      }
    }

    load();

  }, [
    user,
    isSuccess,
  ]);

  return {
    properties,
    isLoading,
  };
}