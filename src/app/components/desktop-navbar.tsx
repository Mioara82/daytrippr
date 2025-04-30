import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from "@clerk/nextjs";
  import ThemeSwitch from "../theme-switch";


  const DesktopNavbar = () => {
    return (
        <header className="flex justify-end items-center p-4 gap-4 h-16">
            <ThemeSwitch />
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            
        </header>
    );
  }

    export default DesktopNavbar;