"use client";

import { createContext, useContext, useState } from "react";
import { courses } from "@/data/courses";

type CourseContextType = {
  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  filteredCourses: typeof courses;
};

const CourseContext = createContext<CourseContextType>(
  {} as CourseContextType
);

export function CourseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      course.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <CourseContext.Provider
      value={{
        search,
        setSearch,
        category,
        setCategory,
        filteredCourses,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export const useCourses = () =>
  useContext(CourseContext);