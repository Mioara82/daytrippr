"use client";

import { useEffect, useState } from "react";
import { SunIcon } from "./SVG-components/sun";
import { MoonIcon } from "./SVG-components/moon";

const ThemeSwitch = () => {
	const [theme, setTheme] = useState<"light" | "dark" | null>("light");
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.toggle("dark", savedTheme === "dark");
		} else {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setTheme("dark");
				document.documentElement.classList.add("dark");
			} else {
				setTheme("light");
				document.documentElement.classList.remove("dark");
			}
		}
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	if (!mounted) return null;

	return (
		<div>
			<button
				type="button"
				className="p-2 border-2 rounded-full flex items-center justify-between w-14 bg-primary "
				onClick={toggleTheme}
				onKeyDown={(e: React.KeyboardEvent) => {
					if (e.key === "Enter" || e.key === " ") {
						toggleTheme();
					}
				}}
				aria-checked={theme === "dark"}
				role="switch"
				aria-label="Toggle theme"
			>
				<span className={theme === "light" ? "opacity-100" : "opacity-0"}>
					<MoonIcon />
				</span>

				<span className={theme === "dark" ? "opacity-100" : "opacity-0"}>
					<SunIcon />
				</span>

				<div
					className={`transition-all duration-300 transform ${
						theme === "dark" ? "translate-x-7" : "translate-x-0"
					} w-6 h-6 bg-accent rounded-full`}
				/>
			</button>
		</div>
	);
};

export default ThemeSwitch;
