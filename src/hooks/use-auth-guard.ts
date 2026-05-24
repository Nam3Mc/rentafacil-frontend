"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  useAuthStore,
} from "@/store/auth.store";

export function useAuthGuard() {

  const router =
    useRouter();

  const { user } =
    useAuthStore();

  const [
    isHydrated,
    setIsHydrated,
  ] =
    useState(false);

  useEffect(() => {

    setIsHydrated(true);

  }, []);

  useEffect(() => {

    if (
      isHydrated &&
      !user
    ) {

      router.push(
        "/login"
      );

    }

  }, [
    user,
    router,
    isHydrated,
  ]);

  return {
    user,
    isHydrated,
  };
}