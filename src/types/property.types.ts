export type PropertyStatus =
  | "pending_verification"
  | "approved"
  | "active"
  | "paused"
  | "rented"
  | "expired"
  | "rejected";

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

  isFeatured: boolean;

  createdAt: string;

  updatedAt: string;
}