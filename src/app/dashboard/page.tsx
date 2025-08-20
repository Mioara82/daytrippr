"use client";

import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
    const {user, isLoaded} = useUser();
    if (!isLoaded) return <div>Loading...</div>;
    if(!user)return <div>Please sign in to view your dashboard.</div>;
  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Welcome to your dashboard, {user.firstName}</h2>
      <h3>Your email address is {user.primaryEmailAddress?.emailAddress}</h3>
      {/* User preferences + filters here */}
    </div>
  );
}
