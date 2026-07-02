"use client";

import Link from "next/link";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <DesktopMenu />

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost">
              Login
            </Button>
          </Link>

          <Link href="/signup">
            <Button>
              Get Started
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}