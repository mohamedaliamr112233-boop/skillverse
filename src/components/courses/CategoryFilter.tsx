"use client";

import { motion } from "framer-motion";
import { useCourses } from "@/context/CourseContext";

const categories = [
  "All",
  "React",
  "Next.js",
  "Python",
  "Security",
  "Flutter",
  "AI",
];

export default function CategoryFilter() {
  const { category, setCategory } = useCourses();

  return (
    <section className="mx-auto max-w-7xl py-6">
      <div className="flex flex-wrap gap-4">
        {categories.map((item) => (
          <motion.button
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCategory(item)}
            className={`rounded-full px-5 py-2 transition font-medium ${
              category === item
                ? "bg-blue-600 text-white"
                : "border border-slate-700 bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            {item}
          </motion.button>
        ))}
      </div>
    </section>
  );
}