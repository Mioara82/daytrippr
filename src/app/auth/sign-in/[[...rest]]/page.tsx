"use client";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { authStyles } from "../../authStyles";

const LoginPage = () => {
	const router = useRouter();
	const { user, isLoaded } = useUser();
	const pathname = usePathname();
	const incorrectPassword = pathname.includes("factor-one");

	// useEffect(() => {
	// 	if (isLoaded && user) {
	// 		router.push("/");
	// 	}
	// }, [isLoaded, user, router]);

	return (
		<div>
			{incorrectPassword && <p>You have introduced an incorrect password</p>}
			<SignIn
			path="/sign-in" routing="path" signUpUrl="/sign-up"
				appearance={{
					elements: authStyles,
				}}
			/>
		</div>
	);
};

export default LoginPage;
