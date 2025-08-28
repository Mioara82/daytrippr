import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { placeResponseSchema, type PlaceResponse } from "../schemas";

type UseSearchPlacesParams = {
  query: string; // pass your *debounced* value here
  sessionToken?: string; // reuse during a typing session (optional)
  lat?: number;
  lng?: number;
  region?: string; // e.g. "uk", "fr"
  minChars?: number; // default 3
};

export function usePlacesQuery({
  query,
  sessionToken,
  lat,
  lng,
  region,
  minChars = 3,
}: UseSearchPlacesParams) {
  const q = query.trim();
  const enabled = q.length >= minChars;
  const params = new URLSearchParams();
  params.set("q", q);
  if (sessionToken) params.set("sessionToken", sessionToken);
  if (Number.isFinite(lat!)) params.set("lat", String(lat));
  if (Number.isFinite(lng!)) params.set("lng", String(lng));
  if (region) params.set("region", region);
  return useQuery<PlaceResponse>({
    queryKey: [
      "places",
      "autocomplete",
      { q, lat, lng, region, hasToken: !!sessionToken },
    ],
    queryFn: async () => {
      const res = await fetch(`/api/places/autocomplete?${params.toString()}`);
      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`Autocomplete failed: ${res.status} ${txt}`);
      }
      const json = await res.json();
      return placeResponseSchema.parse(json);
    },
    enabled,
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    retry: 1,
  });
}
