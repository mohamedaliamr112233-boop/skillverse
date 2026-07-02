import {
  Code2,
  Shield,
  Brain,
  Smartphone,
  Database,
  Globe,
} from "lucide-react";

const categories = [
  {
    title: "Programming",
    icon: Code2,
    color: "text-blue-500",
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "text-red-500",
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    color: "text-violet-500",
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "text-green-500",
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    color: "text-orange-500",
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-cyan-500",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-3 text-center text-4xl font-bold text-white">
          Browse Categories
        </h2>

        <p className="mb-12 text-center text-slate-400">
          Choose your favorite technology and start learning today.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon className={`mb-5 h-12 w-12 ${category.color}`} />

                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  Explore premium courses and practical projects.
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}