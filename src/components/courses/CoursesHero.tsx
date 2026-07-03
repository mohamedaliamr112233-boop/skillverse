"use client";

import { motion } from "framer-motion";

export default function CoursesHero() {
  return (
    <section className="border-b border-slate-800 bg-slate-900 py-20">

      <div className="mx-auto max-w-7xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold"
        >
          📚 Explore Courses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="mt-6 text-xl text-slate-400"
        >
          Learn modern technologies from industry experts.
        </motion.p>

      </div>

    </section>
  );
}