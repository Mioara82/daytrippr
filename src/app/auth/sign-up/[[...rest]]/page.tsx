"use client";

import { SignUp, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authStyles } from "../../authStyles";

const UserRegisterPage = () => {
	const router = useRouter();
	const { user, isLoaded } = useUser();
	useEffect(() => {
		if (isLoaded && user) {
			router.push("/");
		}
	}, [isLoaded, user, router]);

	return (
		<SignUp
			appearance={{
				elements: authStyles,
			}}
		/>
	);
};

export default UserRegisterPage;
