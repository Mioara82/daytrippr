"use client";
import { SignIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { authStyles } from "../../authStyles";
import { useHomeRedirect } from "../../hooks";

const LoginPage = () => {
	const pathname = usePathname();
	const incorrectPassword = pathname.includes("factor-one");

	useHomeRedirect();

	return (
		<SignIn
			appearance={{
				elements: authStyles,
			}}
		/>
	);
};

export default LoginPage;
