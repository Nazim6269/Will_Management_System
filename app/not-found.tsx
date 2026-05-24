"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import "./globals.css";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-blue8 px-6">
      {/* Glow Effects */}
      <div className="circular-glow" />
      <div className="circular-glow-green" />

      {/* Grid Overlay */}
      <div className="gradient-bg absolute inset-0 opacity-30" />

      <section className="relative z-10 w-full max-w-2xl">
        <div className="card-box-shadow relative overflow-hidden rounded-[32px] border border-borderColor/20 p-10 md:p-14 text-center">
          {/* Badge */}
          <div className="dot-green-div mx-auto mb-6 w-fit">
            <div className="flex items-center gap-2">
              <div className="dot-green h-2 w-2 rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue75">
                Page Not Found
              </span>
            </div>
          </div>

          {/* 404 */}
          <h1 className="gradient-text-one mb-4 text-7xl font-black md:text-9xl">
            404
          </h1>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold text-gray96 md:text-5xl">
            Lost in the Digital Void
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-xl text-base leading-8 text-blue70 md:text-lg">
            The page you’re looking for doesn’t exist, was moved, or never made
            it into this dimension.
          </p>

          {/* Actions */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="button-bg-violet button-shadow inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              <Home className="h-4 w-4" />
              Back Home
            </Link>

            <button
              onClick={() => history.back()}
              className="linear-gradient-one inline-flex items-center gap-2 rounded-xl border border-borderColor/20 px-6 py-3 text-sm font-semibold text-gray96 transition-all duration-300 hover:border-blue66"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>

          {/* Bottom Glow */}
          <div className="absolute bottom-[-40px] left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-blue66/20 blur-3xl" />
        </div>
      </section>
    </main>
  );
}
