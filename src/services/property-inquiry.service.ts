import { PropertyInquiry } from "@/types/property-inquiry.types";

import { propertyInquiryMock } from "@/services/mocks/property-inquiry.mock";

export const propertyInquiryService = {

  async getAll() {

    return propertyInquiryMock.getAll();
  },

  async create(
    inquiry: PropertyInquiry
  ) {

    return propertyInquiryMock.create(
      inquiry
    );
  },

};