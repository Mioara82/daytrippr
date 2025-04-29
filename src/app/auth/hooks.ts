"use client";

import {useUser} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useHomeRedirect() {
    const router = useRouter();
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (isLoaded && user) {
            router.push("/");
        }
    }, [isLoaded, user, router]);
}