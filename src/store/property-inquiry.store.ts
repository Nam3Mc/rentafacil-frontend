import { create } from "zustand";

import { persist } from "zustand/middleware";

import inquiriesData from "@/data/property-inquiries.json";

import { PropertyInquiry } from "@/types/property-inquiry.types";

interface PropertyInquiryStore {
  inquiries: PropertyInquiry[];

  addInquiry: (
    inquiry: PropertyInquiry
  ) => void;

  deleteInquiry: (
    inquiryId: string
  ) => void;

  updateInquiryStatus: (
    inquiryId: string,
    status: PropertyInquiry["status"]
  ) => void;
}

export const usePropertyInquiryStore =
  create<PropertyInquiryStore>()(
    persist(
      (set) => ({
        inquiries:
          inquiriesData as PropertyInquiry[],

        addInquiry: (inquiry) =>
          set((state) => ({
            inquiries: [
              inquiry,
              ...state.inquiries,
            ],
          })),

        deleteInquiry: (inquiryId) =>
          set((state) => ({
            inquiries:
              state.inquiries.filter(
                (inquiry) =>
                  inquiry.id !== inquiryId
              ),
          })),

        updateInquiryStatus: (
          inquiryId,
          status
        ) =>
          set((state) => ({
            inquiries:
              state.inquiries.map(
                (inquiry) =>
                  inquiry.id === inquiryId
                    ? {
                        ...inquiry,
                        status,
                      }
                    : inquiry
              ),
          })),
      }),
      {
        name: "rentafacil-property-inquiries",
      }
    )
  );