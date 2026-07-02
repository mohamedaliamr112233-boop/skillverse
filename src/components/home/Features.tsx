import { BookOpen, ShieldCheck, Brain } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Interactive Courses",
    description: "Learn through hands-on projects and real-world examples.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Master ethical hacking and defensive security skills.",
  },
  {
    icon: Brain,
    title: "AI Learning",
    description: "Discover AI tools and modern development workflows.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Why Choose SkillVerse?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
              >
                <Icon className="mb-6 h-12 w-12 text-blue-500" />

                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}