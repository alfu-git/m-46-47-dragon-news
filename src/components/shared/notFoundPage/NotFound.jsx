"use client";

import Link from "next/link";
import { FileQuestion, Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="my-15 container mx-auto px-5">
      <div className="min-h-scree flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Newspaper-style header */}
          <div className="border-b-4 border-double border-stone-800 pb-4 mb-8">
            <p className="text-xs tracking-[0.3em] text-stone-500 uppercase mb-2">
              Breaking News • Page Not Found
            </p>
            <h1 className="font-serif text-8xl md:text-9xl font-black text-stone-800 leading-none">
              404
            </h1>
          </div>

          {/* Newspaper headline style */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-stone-800 mb-4 leading-tight">
              EXTRA! EXTRA! <br />
              <span className="text-stone-600">Story Not Found!</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-stone-500 text-sm mb-6">
              <span className="w-8 h-px bg-stone-300"></span>
              <FileQuestion className="w-5 h-5" />
              <span className="w-8 h-px bg-stone-300"></span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-stone-800 text-white px-6 py-3 rounded-sm font-medium hover:bg-stone-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 border-2 border-stone-300 text-stone-700 px-6 py-3 rounded-sm font-medium hover:border-stone-400 hover:bg-stone-100 transition-colors"
            >
              <Search className="w-4 h-4" />
              Search Articles
            </Link>
          </div>

          {/* Go back link */}
          <button
            onClick={() => window.history.back()}
            className="mt-8 inline-flex items-center gap-2 text-stone-500 hover:text-stone-700 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back to previous page
          </button>
        </div>
      </div>
    </section>
  );
}
