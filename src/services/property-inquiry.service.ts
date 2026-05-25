import { usePropertyInquiryStore } from "@/store/property-inquiry.store";

import { PropertyInquiry } from "@/types/property-inquiry.types";

export const propertyInquiryService = {
  async getAll() {
    return usePropertyInquiryStore
      .getState()
      .inquiries;
  },

  async create(
    inquiry: PropertyInquiry
  ) {
    usePropertyInquiryStore
      .getState()
      .addInquiry(inquiry);

    return inquiry;
  },

  async delete(
    inquiryId: string
  ) {
    usePropertyInquiryStore
      .getState()
      .deleteInquiry(inquiryId);

    return true;
  },
};