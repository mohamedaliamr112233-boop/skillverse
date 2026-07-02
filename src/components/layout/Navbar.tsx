"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-3xl font-bold text-white"
        >
          🚀 SkillVerse
        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-gray-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="text-gray-300 transition hover:text-white"
          >
            Courses
          </Link>

          <Link
            href="/categories"
            className="text-gray-300 transition hover:text-white"
          >
            Categories
          </Link>

          <Link
            href="/pricing"
            className="text-gray-300 transition hover:text-white"
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className="text-gray-300 transition hover:text-white"
          >
            About
          </Link>

        </nav>

        <div className="flex items-center gap-3">

          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Get Started
          </Button>

        </div>

      </div>
    </header>
  );
}