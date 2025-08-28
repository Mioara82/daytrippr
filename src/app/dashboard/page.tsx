"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import SearchResultsWrapper from "@/features/places/components/search-results-wrapper";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;
  if (!user) return <div>Please sign in to view your dashboard.</div>;
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Page title */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold">
            Welcome {user.firstName} Where would you like to go?
          </h1>
          <p className="text-muted-foreground">
            Search for a destination to start planning your perfect day trip
          </p>
        </div>
        <SearchResultsWrapper />
      </div>
    </main>
  );
}
