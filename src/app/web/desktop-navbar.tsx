import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from "@clerk/nextjs";
  import { ModeToggle } from "./theme-toggle-button";

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
        </header>
    );
  }

    export default DesktopNavbar;