export type PropertyStatus =
  | "pending_verification"
  | "approved"
  | "active"
  | "paused"
  | "rented"
  | "expired"
  | "rejected";

export type PropertyVerificationStatus =
  | "unverified"
  | "pending_review"
  | "approved"
  | "rejected";

export type VerificationDocumentType =
  | "identity_document"
  | "utility_bill"
  | "property_title"
  | "power_of_attorney";

export interface PropertyVerificationDocument {
  id: string;

  type: VerificationDocumentType;

  fileName: string;

  fileUrl: string;

  uploadedAt: string;
}

export type PropertyType =
  | "apartment"
  | "house"
  | "studio"
  | "room"
  | "commercial"
  | "office"
  | "land";

export interface Property {
  id: string;

  slug: string;

  title: string;

  description: string;

  type: PropertyType;

  status: PropertyStatus;

  monthlyPrice: number;

  bedrooms: number;

  bathrooms: number;

  area: number;

  city: string;

  state: string;

  country: string;

  address: string;

  latitude: number;

  longitude: number;

  images: string[];

  ownerId: string;

  verificationStatus: PropertyVerificationStatus;
  
  verificationDocuments: PropertyVerificationDocument[];

  isFeatured: boolean;

  createdAt: string;

  updatedAt: string;
}