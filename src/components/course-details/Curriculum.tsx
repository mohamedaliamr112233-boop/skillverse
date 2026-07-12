"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const lessons = [
  "Introduction",
  "Project Setup",
  "HTML & CSS Basics",
  "JavaScript Essentials",
  "React Fundamentals",
  "Components & Props",
  "State Management",
  "Routing",
  "API Integration",
  "Final Project",
];

export default function Curriculum() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8"
    >
      <h2 className="mb-8 text-3xl font-bold text-white">
        Course Curriculum
      </h2>

      <div className="space-y-5">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 hover:bg-slate-800 transition"
          >
            <CheckCircle2
              size={22}
              className="text-green-400"
            />

            <span className="text-slate-200">
              {lesson}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}