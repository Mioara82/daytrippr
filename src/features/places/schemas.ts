import { z } from "zod";

export const placeSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(100),
  secondaryText: z.string().optional().default(""),
});

export const placeResponseSchema = z.object({
  sessionToken: z.string().min(1),
  places: z.array(placeSchema),
});

export type Place = z.infer<typeof placeSchema>;
export type PlaceResponse = z.infer<typeof placeResponseSchema>;
