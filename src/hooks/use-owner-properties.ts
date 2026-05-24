"use client";

import { useMemo } from "react";

import { useAuthStore } from "@/store/auth.store";

import { usePropertyStore } from "@/store/property.store";

export function useOwnerProperties() {

  const { user } =
    useAuthStore();

  const { properties } =
    usePropertyStore();

  const ownerProperties =
    useMemo(() => {

      if (!user) {
        return [];
      }

      return properties.filter(
        (property) =>
          property.ownerId === user.id
      );

    }, [
      properties,
      user,
    ]);

  return {
    properties:
      ownerProperties,

    isLoading: false,
  };
}