import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "./theme-switch";
import { Roboto, Roboto_Mono } from "next/font/google";
import DesktopNavbar from "@/shared/ui/desktop-navbar";
import "./globals.css";

const geistSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Daytrippr",
  description: "a day-trip planner for the busy traveler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-dvh
          bg-gradient-to-br from-sky-100 via-white to-teal-100
          dark:from-slate-800 dark:via-slate-900 dark:to-black`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div
              className=" max-w-7xl mx-auto mt-4 mb-4 px-4 sm:px-6 lg:px-8 py-6
              bg-background
              backdrop-blur-md rounded-2xl shadow"
            >
              <DesktopNavbar />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
