import "server-only";
import { autocompleteResponseSchema } from "./schemas";

export type AutocompleteRequest = {
  input: string;
  includedPrimaryTypes?: string[];
  includedRegionCodes?: string[];
  sessionToken?: string;
  origin?: { latitude: number; longitude: number };
};

export async function googleAutocomplete(body: AutocompleteRequest) {
  const res = await fetch(
    "https://places.googleapis.com/v1/places:autocomplete",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY!,
        "X-Goog-FieldMask":
          "suggestions.placePrediction.placeId,suggestions.placePrediction.structuredFormat.mainText.text,suggestions.placePrediction.structuredFormat.secondaryText.text,suggestions.placePrediction.text.text",
      },
      body: JSON.stringify(body),
    }
  );

  const json = await res.json();
  // Validate external data at the integration boundary
  const parsed = autocompleteResponseSchema.parse(json);
  return parsed; // still Google-shaped
}
