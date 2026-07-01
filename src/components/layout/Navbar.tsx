export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-white">
          🚀 SkillVerse
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#">Courses</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Login</a>
        </div>
      </div>
    </nav>
  );
}