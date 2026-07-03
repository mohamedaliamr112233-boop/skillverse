"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  category: string;
};

export default function CourseCard({ title, category }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden"
    >
      <div className="h-48 bg-slate-800" />

      <div className="p-6">
        <span className="text-sm text-blue-400">{category}</span>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {title}
        </h3>

        <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 hover:bg-blue-700">
          View Course
        </button>
      </div>
    </motion.div>
  );
}