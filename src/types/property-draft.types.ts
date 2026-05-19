import { UploadedMedia } from "@/types/media.types";

export interface PropertyDraft {
  title: string;

  description: string;

  type: string;

  monthlyPrice: number;

  bedrooms: number;

  bathrooms: number;

  area: number;

  city: string;

  address: string;

  images: UploadedMedia[];
}