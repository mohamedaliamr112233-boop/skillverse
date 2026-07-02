"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          🚀 Welcome to SkillVerse
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Learn Skills
          <br />
          Build Projects
          <br />
          Grow Your Career
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Join thousands of students learning programming,
          cybersecurity, AI and more with modern interactive courses.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg">
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button variant="outline" size="lg">
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

      </div>
    </section>
  );
}