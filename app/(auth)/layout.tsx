import type { Metadata } from "next";
import { Toaster } from "sonner";
import {
  Geist,
  Geist_Mono,
  Monoton,
  Libre_Baskerville,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { Footer, Navbar } from "@/components/organisms/marketing/home";
import "@/app/globals.css";
import AgentFooter from "@/components/organisms/AgentFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
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

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent - Inherix",
  description: "Agent - Inherix",
};

export default function AgentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${monoton.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-center" richColors />
        <div className="navbar-bg">
          <Navbar />
        </div>
        <main className="grow flex flex-col">{children}</main>
        <AgentFooter />
      </body>
    </html>
  );
}
