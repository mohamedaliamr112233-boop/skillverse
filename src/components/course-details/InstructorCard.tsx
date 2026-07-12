"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, BookOpen } from "lucide-react";

export default function InstructorCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mx-auto mt-16 max-w-7xl rounded-3xl border border-slate-800 bg-slate-900 p-8"
    >
      <h2 className="mb-8 text-3xl font-bold text-white">
        Meet Your Instructor
      </h2>

      <div className="flex flex-col gap-8 md:flex-row md:items-center">

        <div className="relative h-36 w-36 overflow-hidden rounded-full">
          <Image
            src="/instructor.jpg"
            alt="Instructor"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">

          <h3 className="text-3xl font-bold text-white">
            Ali Mohamed
          </h3>

          <p className="mt-3 text-slate-400">
            Full Stack Developer & Programming Instructor with years of
            experience teaching React, Next.js, Python and Cyber Security.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">

            <div className="flex items-center gap-3">
              <Award className="text-blue-400" />
              <span>12+ Courses</span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-blue-400" />
              <span>18K Students</span>
            </div>

            <div className="flex items-center gap-3">
              <BookOpen className="text-blue-400" />
              <span>450 Lessons</span>
            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}