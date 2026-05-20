export type VerificationStatus =
  | "unverified"
  | "pending"
  | "verified"
  | "rejected";

export interface VerificationDocument {
  id: string;

  name: string;

  type:
    | "identity"
    | "ownership"
    | "power_of_attorney";

  status: VerificationStatus;

  uploadedAt: string;
}