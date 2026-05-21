"use client";

import { Heart } from "lucide-react";

import { usePropertyFavoritesStore } from "@/store/property-favorites.store";

export function PropertyFavoritesCounter() {

  const { favorites } =
    usePropertyFavoritesStore();

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">

      <Heart className="size-4 text-red-500 fill-red-500" />

      {favorites.length} favoritas

    </div>
  );
}