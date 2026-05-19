import { ZodSchema } from "zod";

export function validateForm<T>(
  schema: ZodSchema<T>,
  data: unknown
) {
  return schema.safeParse(data);
}