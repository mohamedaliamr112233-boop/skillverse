"use client";

import { Search } from "lucide-react";
import { useCourses } from "@/context/CourseContext";

export default function SearchBar() {
  const { search, setSearch } = useCourses();

  return (
    <section className="mx-auto max-w-7xl py-10">
      <div className="relative">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          size={20}
        />

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
        />

      </div>
    </section>
  );
}