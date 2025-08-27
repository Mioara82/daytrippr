import { z } from "zod";

export const formattableTextSchema = z.object({
  text: z.string().optional(),
  matches: z
    .array(
      z.object({
        startOffset: z.number(),
        endOffset: z.number(),
      })
    )
    .optional(),
});

export const structuredFormatSchema = z.object({
  mainText: formattableTextSchema.optional(),
  secondaryText: formattableTextSchema.optional(),
});

export const placePredictionSchema = z.object({
  place: z.string().optional(),
  placeId: z.string().optional(),
  text: formattableTextSchema.optional(),
  structuredFormat: structuredFormatSchema.optional(),
  types: z.array(z.string()).optional(),
  distanceMeters: z.number().optional(),
});

export const suggestionSchema = z.object({
  placePrediction: placePredictionSchema.optional(),
});

export const autocompleteResponseSchema = z.object({
  suggestions: z.array(suggestionSchema).default([]),
});

export const getPlaceResponseSchema = z.object({
  id: z.string().optional(),
  displayName: z.object({ text: z.string().optional() }).optional(),
  formattedAddress: z.string().optional(),
  location: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
    })
    .optional(),
});
