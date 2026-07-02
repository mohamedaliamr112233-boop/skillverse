import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="rounded-xl bg-blue-600 p-2 text-white">
        <GraduationCap size={22} />
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">
          SkillVerse
        </h1>

        <p className="text-xs text-gray-400">
          Learn • Build • Grow
        </p>
      </div>
    </Link>
  );
}