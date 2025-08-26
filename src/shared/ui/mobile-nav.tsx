"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListBulletsIcon } from "@phosphor-icons/react/dist/csr/ListBullets";
import { MapPinSimpleAreaIcon } from "@phosphor-icons/react/dist/csr/MapPinSimpleArea";

const MobileNav = () => {

  return (
    <div className="flex items-center justify-between gap-4">
      <Sheet>
        <SheetTrigger>
          <ListBulletsIcon size={28} color="var(--color-icon)" weight="bold" />
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navigate to different pages</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center gap-2">
        <MapPinSimpleAreaIcon
          size={30}
          color="var(--color-icon)"
          weight="bold"
        />
      </Link>
      
    </div>
  );
};

export default MobileNav;
