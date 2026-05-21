import { create } from "zustand";

import { persist } from "zustand/middleware";

interface PropertyRecentlyViewedState {
  recentlyViewed: string[];

  addRecentlyViewed: (
    propertyId: string
  ) => void;
}

export const usePropertyRecentlyViewedStore =
  create<PropertyRecentlyViewedState>()(
    persist(
      (set, get) => ({
        recentlyViewed: [],

        addRecentlyViewed: (
          propertyId
        ) => {

          const current =
            get().recentlyViewed;

          const filtered =
            current.filter(
              (id) =>
                id !== propertyId
            );

          set({
            recentlyViewed: [
              propertyId,
              ...filtered,
            ].slice(0, 10),
          });
        },
      }),
      {
        name:
          "property-recently-viewed-storage",
      }
    )
  );