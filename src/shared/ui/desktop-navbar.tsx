import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "@/shared/ui/theme-toggle-button";
import { Button } from "@/components/ui/button";
import SearchInput from "./input";
import MobileNav from "./MobileNav";
import { MapPinSimpleAreaIcon } from "@phosphor-icons/react/ssr";

const DesktopNavbar = () => {
  return (
    <nav className="flex justify-between max-w-full items-center p-4 gap-4 h-16">
      <div className="md:hidden">
        <MobileNav />{" "}
      </div>
      <div className="flex items-center gap-2">
        <Link href="/">
          <MapPinSimpleAreaIcon
            size={30}
            color="var(--color-icon)"
            weight="regular"
          />
        </Link>
        <span className="hidden md:block text-lg">Daytrippr</span>
      </div>
      <SearchInput />
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="default"
          size="default"
          className="hidden md:inline"
        >
          <Link href="/dashboard" className="text-sm">
            Dashboard
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ModeToggle />
        </div>
      </div>
      <hr className="block md:hidden" />
    </nav>
  );
};

export default DesktopNavbar;
