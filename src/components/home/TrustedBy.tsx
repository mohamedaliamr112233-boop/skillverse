export default function TrustedBy() {
  const companies = [
    "Google",
    "Microsoft",
    "GitHub",
    "OpenAI",
    "Amazon",
    "Meta",
  ];

  return (
    <section className="border-y border-slate-800 bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm uppercase tracking-widest text-slate-400">
          Trusted by learners worldwide
        </p>

        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-slate-800 bg-slate-950 p-5 font-semibold text-slate-300 transition hover:border-blue-500 hover:text-white"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}