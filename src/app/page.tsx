import Navbar from "../components/layout/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            🚀 SkillVerse
          </h1>

          <p className="text-xl text-gray-300">
            Learn. Build. Grow.
          </p>
        </div>
      </main>
    </>
  );
}