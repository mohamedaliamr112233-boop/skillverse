"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users, BookOpen, Clock3, GraduationCap } from "lucide-react";

type Props = {
  course: {
    title: string;
    instructor: string;
    category: string;
    image: string;
    rating: number;
    students: number;
    lessons: number;
    duration: string;
    level: string;
    price: number;
  };
};

export default function CourseHero({ course }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          className="relative h-[500px] overflow-hidden rounded-3xl"
        >
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
        >

          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm">
            {course.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            {course.title}
          </h1>

          <p className="mt-5 text-lg text-slate-400">
            Created by <span className="text-white">{course.instructor}</span>
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">

            <div className="flex items-center gap-3">
              <Star className="fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
            </div>

            <div className="flex items-center gap-3">
              <Users />
              <span>{course.students} Students</span>
            </div>

            <div className="flex items-center gap-3">
              <BookOpen />
              <span>{course.lessons} Lessons</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 />
              <span>{course.duration}</span>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap />
              <span>{course.level}</span>
            </div>

          </div>

          <div className="mt-12 flex items-center justify-between">

            <h2 className="text-5xl font-bold text-blue-400">
              ${course.price}
            </h2>

            <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold transition hover:bg-blue-700">
              Enroll Now
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}