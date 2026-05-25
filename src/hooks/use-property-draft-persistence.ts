"use client";

import { useEffect, useRef } from "react";

import { STORAGE_KEYS } from "@/constants/storage";
import { usePropertyPublicationStore } from "@/store/property-publication.store";

export function usePropertyDraftPersistence() {
  const hasHydratedRef = useRef(false);

  const draft = usePropertyPublicationStore(
    (state) => state.draft
  );

  const updateDraft = usePropertyPublicationStore(
    (state) => state.updateDraft
  );

  useEffect(() => {
    const savedDraft = localStorage.getItem(
      STORAGE_KEYS.PROPERTY_DRAFT
    );

    if (savedDraft) {
      try {
        const parsedDraft = JSON.parse(savedDraft);

        updateDraft(parsedDraft);
      } catch (error) {
        console.error(
          "Failed to load property draft",
          error
        );
      }
    }

    hasHydratedRef.current = true;
  }, [updateDraft]);

  useEffect(() => {
    if (!hasHydratedRef.current) {
      return;
    }

    localStorage.setItem(
      STORAGE_KEYS.PROPERTY_DRAFT,
      JSON.stringify(draft)
    );
  }, [draft]);
}