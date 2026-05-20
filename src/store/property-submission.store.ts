import { create } from "zustand";

interface PropertySubmissionStore {
  isSubmitting: boolean;

  isSuccess: boolean;

  setSubmitting: (
    value: boolean
  ) => void;

  setSuccess: (
    value: boolean
  ) => void;

  resetSubmission: () => void;
}

export const usePropertySubmissionStore =
  create<PropertySubmissionStore>(
    (set) => ({
      isSubmitting: false,

      isSuccess: false,

      setSubmitting: (
        value
      ) =>
        set({
          isSubmitting: value,
        }),

      setSuccess: (
        value
      ) =>
        set({
          isSuccess: value,
        }),

      resetSubmission: () =>
        set({
          isSubmitting: false,
          isSuccess: false,
        }),
    })
  );