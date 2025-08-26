"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListBulletsIcon } from "@phosphor-icons/react/dist/csr/ListBullets";

const MobileNav = () => {

  return (
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
  );
};

export default MobileNav;
