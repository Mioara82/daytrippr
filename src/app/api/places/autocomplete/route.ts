import { NextResponse, NextRequest } from "next/server";
import {
  googleAutocomplete,
  type AutocompleteRequest,
} from "@/server/integrations/google/fetch";
import { placeSchema, placeResponseSchema } from "@/features/places/schemas";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const input = (searchParams.get("q") || "").trim();
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  const region = searchParams.get("region") || undefined;
  const sessionToken = searchParams.get("sessionToken") || crypto.randomUUID();

  if (input.length < 3) {
    return NextResponse.json({ sessionToken, destinations: [] });
  }

  const body: AutocompleteRequest = {
    input,
    includedPrimaryTypes: ["(cities)"],
    sessionToken,
    ...(region ? { includedRegionCodes: [region] } : {}),
    ...(Number.isFinite(lat) && Number.isFinite(lng)
      ? { origin: { latitude: lat, longitude: lng } }
      : {}),
  };

  const raw = await googleAutocomplete(body);

  const places = raw.suggestions
    .map((s) => s.placePrediction)
    .filter(Boolean)
    .map((p) => ({
      id: p!.placeId ?? p!.place!,
      name: p!.structuredFormat?.mainText?.text ?? p!.text?.text ?? "",
      secondaryText: p!.structuredFormat?.secondaryText?.text ?? "",
    }))
    .map((d) => placeSchema.parse(d));

  const payload = placeResponseSchema.parse({
    sessionToken,
    places,
  });

  return NextResponse.json(payload);
}
