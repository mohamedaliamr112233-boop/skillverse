import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

import CoursesHero from "@/components/courses/CoursesHero";
import SearchBar from "@/components/courses/SearchBar";
import CategoryFilter from "@/components/courses/CategoryFilter";
import CoursesGrid from "@/components/courses/CoursesGrid";
import Pagination from "@/components/courses/Pagination";

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">

        <CoursesHero />

        <SearchBar />

        <CategoryFilter />

        <CoursesGrid />

        <Pagination />

      </main>

      <Footer />
    </>
  );
}