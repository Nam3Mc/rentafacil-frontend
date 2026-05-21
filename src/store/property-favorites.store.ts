import { create } from "zustand";

import { persist } from "zustand/middleware";

interface PropertyFavoritesState {
  favorites: string[];

  toggleFavorite: (
    propertyId: string
  ) => void;

  isFavorite: (
    propertyId: string
  ) => boolean;
}

export const usePropertyFavoritesStore =
  create<PropertyFavoritesState>()(
    persist(
      (set, get) => ({
        favorites: [],

        toggleFavorite: (
          propertyId
        ) => {
          const current =
            get().favorites;

          const exists =
            current.includes(
              propertyId
            );

          if (exists) {
            set({
              favorites:
                current.filter(
                  (id) =>
                    id !== propertyId
                ),
            });
          } else {
            set({
              favorites: [
                ...current,
                propertyId,
              ],
            });
          }
        },

        isFavorite: (
          propertyId
        ) =>
          get().favorites.includes(
            propertyId
          ),
      }),
      {
        name:
          "property-favorites-storage",
      }
    )
  );