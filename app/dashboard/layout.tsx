import type { Metadata } from "next";
import { Toaster } from "sonner";
import {
  Geist,
  Geist_Mono,
  Monoton,
  Libre_Baskerville,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const libreBaskerville = Libre_Baskerville({
  variable: "--next-font-libre-baskerville",
  subsets: ["latin"],
  weight: "400",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--next-font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: "400",
});

export const monoton = Monoton({
  variable: "--next-font-monoton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard - Teojunping",
  description: "Dashboard - Teojunping",
};

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${monoton.variable} ${libreBaskerville.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex overflow-hidden bg-blue8 font-sans">
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
