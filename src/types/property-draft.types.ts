import {
  PropertyStatus,
  PropertyVerificationDocument,
} from "@/types/property.types";

export interface PropertyDraft {
  id?: string;

  slug?: string;

  title: string;

  description: string;

  type: string;

  status: PropertyStatus;

  monthlyPrice: number;

  bedrooms: number;

  bathrooms: number;

  area: number;

  city: string;

  address: string;

  images: string[];

  verificationDocuments: PropertyVerificationDocument[];

  createdAt?: string
}