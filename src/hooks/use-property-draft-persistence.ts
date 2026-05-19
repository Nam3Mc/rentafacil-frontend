"use client";

import { useEffect } from "react";

import { STORAGE_KEYS } from "@/constants/storage";

import { usePropertyPublicationStore } from "@/store/property-publication.store";

let hasHydrated = false;

export function usePropertyDraftPersistence() {
  const draft =
    usePropertyPublicationStore(
      (state) => state.draft
    );

  const updateDraft =
    usePropertyPublicationStore(
      (state) => state.updateDraft
    );

  /* Load Draft Once */
  useEffect(() => {
    if (hasHydrated) {
      return;
    }

    hasHydrated = true;

    const savedDraft =
      localStorage.getItem(
        STORAGE_KEYS.PROPERTY_DRAFT
      );

    if (!savedDraft) {
      return;
    }

    try {
      const parsedDraft =
        JSON.parse(savedDraft);

      updateDraft(parsedDraft);
    } catch (error) {
      console.error(
        "Failed to load property draft",
        error
      );
    }
  }, [updateDraft]);

  /* Autosave */
  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    localStorage.setItem(
      STORAGE_KEYS.PROPERTY_DRAFT,
      JSON.stringify(draft)
    );
  }, [draft]);
}