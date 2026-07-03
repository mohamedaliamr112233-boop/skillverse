"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="relative">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          size={20}
        />

        <input
          type="text"
          placeholder="Search courses..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500"
        />

      </div>

    </section>
  );
}