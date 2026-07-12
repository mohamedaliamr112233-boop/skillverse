"use client";

import CourseCard from "./CourseCard";
import { useCourses } from "@/context/CourseContext";

export default function CoursesGrid() {
  const { filteredCourses } = useCourses();

  return (
    <section className="mx-auto max-w-7xl py-12">
      {filteredCourses.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold text-white">
            No Courses Found 😢
          </h2>

          <p className="mt-3 text-slate-400">
            Try searching with another keyword.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      )}
    </section>
  );
}