"use client";

import {
  useEffect,
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

  const {
    user,
  } =
    useAuthStore();

  useEffect(() => {

    if (!user) {

      router.push(
        "/login"
      );

    }

  }, [
    user,
    router,
  ]);

  return {
    user,
  };
}