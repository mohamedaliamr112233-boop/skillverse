import CoursesHero from "@/components/courses/CoursesHero";
import SearchBar from "@/components/courses/SearchBar";
import CategoryFilter from "@/components/courses/CategoryFilter";
import CoursesGrid from "@/components/courses/CoursesGrid";
import { CourseProvider } from "@/context/CourseContext";

export default function CoursesPage() {
  return (
    <CourseProvider>
      <main className="min-h-screen bg-slate-950 text-white">
        <CoursesHero />

        <div className="mx-auto max-w-7xl px-6 py-10">
          <SearchBar />

          <div className="mt-8">
            <CategoryFilter />
          </div>

          <CoursesGrid />
        </div>
      </main>
    </CourseProvider>
  );
}