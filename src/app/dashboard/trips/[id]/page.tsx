"use client";

import { useParams } from "next/navigation";

export default function TripDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h2>Trip Detail: {id}</h2>
      {/* fetch + render trip details */}
    </div>
  );
}
