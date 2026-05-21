"use client";

import { Heart } from "lucide-react";

import { usePropertyFavoritesStore } from "@/store/property-favorites.store";

interface PropertyFavoriteButtonProps {
  propertyId: string;
}

export function PropertyFavoriteButton({
  propertyId,
}: PropertyFavoriteButtonProps) {

  const {
    toggleFavorite,
    isFavorite,
  } =
    usePropertyFavoritesStore();

  const favorite =
    isFavorite(propertyId);

  return (
    <button
      type="button"
      onClick={() =>
        toggleFavorite(
          propertyId
        )
      }
      className={`flex size-11 items-center justify-center rounded-full border backdrop-blur transition-all ${
        favorite
          ? "border-red-500 bg-red-500 text-white"
          : "border-white/30 bg-black/30 text-white hover:bg-black/50"
      }`}
    >
      <Heart
        className={`size-5 ${
          favorite
            ? "fill-current"
            : ""
        }`}
      />
    </button>
  );
}