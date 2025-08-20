import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "@/shared/ui/theme-toggle-button";
import { Button } from "@/shadcn-components/ui/button";

const DesktopNavbar = () => {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle />
      <Button asChild>
        <Link href="/dashboard" className="text-sm">
          Dashboard
        </Link>
      </Button>
    </header>
  );
};

export default DesktopNavbar;
