import inquiries from "@/data/property-inquiries.json";

import { PropertyInquiry } from "@/types/property-inquiry.types";

let runtimeInquiries =
  [...inquiries] as PropertyInquiry[];

export const propertyInquiryMock = {

  async getAll():
    Promise<PropertyInquiry[]> {

    return runtimeInquiries;
  },

  async create(
    inquiry: PropertyInquiry
  ): Promise<PropertyInquiry> {

    runtimeInquiries = [
      inquiry,
      ...runtimeInquiries,
    ];

    return inquiry;
  },

};