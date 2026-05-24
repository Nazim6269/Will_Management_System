"use client";

import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";
import "./globals.css"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-blue8 px-6">
      {/* Glow Effects */}
      <div className="circular-glow" />
      <div className="circular-glow-green" />

      {/* Background Grid */}
      <div className="gradient-bg absolute inset-0 opacity-30" />

      <section className="relative z-10 w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-[32px] border border-red60/20 bg-blue10 p-10 text-center shadow-[0_0_60px_rgba(239,68,68,0.12)] md:p-14">
          {/* Warning Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red60/20 bg-red60/10">
            <AlertTriangle className="h-10 w-10 text-red60" />
          </div>

          {/* Heading */}
          <h1 className="gradient-text-two mb-4 text-4xl font-bold md:text-5xl">
            Something Went Wrong
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-blue70 md:text-lg">
            An unexpected error occurred while processing your request. Please
            try again or return to the homepage.
          </p>

          {/* Error Message */}
          {process.env.NODE_ENV === "development" && (
            <div className="mb-8 rounded-2xl border border-red60/10 bg-red900/40 p-4 text-left">
              <p className="text-sm text-red300 break-all">{error.message}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={reset}
              className="button-bg-cyan button-shadow-cyan inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-blue8 transition-all duration-300 hover:scale-[1.02]"
            >
              <RefreshCcw className="h-4 w-4" />
              Try Again
            </button>

            <Link
              href="/"
              className="linear-gradient-one inline-flex items-center gap-2 rounded-xl border border-borderColor/20 px-6 py-3 text-sm font-semibold text-gray96 transition-all duration-300 hover:border-blue66"
            >
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </div>

          {/* Ambient Glow */}
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red60/10 blur-3xl" />
        </div>
      </section>
    </main>
  );
}
