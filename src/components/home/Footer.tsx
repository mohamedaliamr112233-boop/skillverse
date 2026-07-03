import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              🚀 SkillVerse
            </h2>

            <p className="mt-4 text-slate-400">
              Learn. Build. Grow.
            </p>

            <div className="mt-6 flex gap-4">
                <FaFacebook className="cursor-pointer text-slate-400 hover:text-white text-xl" />

                <FaXTwitter className="cursor-pointer text-slate-400 hover:text-white text-xl" />

                <FaGithub className="cursor-pointer text-slate-400 hover:text-white text-xl" />

                <FaLinkedin className="cursor-pointer text-slate-400 hover:text-white text-xl" />

                <FaInstagram className="cursor-pointer text-slate-400 hover:text-white text-xl" />        
              
            </div>

          </div>

          {/* Courses */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Courses
            </h3>

            <div className="space-y-3 text-slate-400">

              <Link href="/">React</Link>

              <br />

              <Link href="/">Next.js</Link>

              <br />

              <Link href="/">Python</Link>

              <br />

              <Link href="/">Cyber Security</Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Company
            </h3>

            <div className="space-y-3 text-slate-400">

              <Link href="/">About</Link>

              <br />

              <Link href="/">Careers</Link>

              <br />

              <Link href="/">Blog</Link>

              <br />

              <Link href="/">Contact</Link>

            </div>

          </div>

          {/* Support */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Support
            </h3>

            <div className="space-y-3 text-slate-400">

              <Link href="/">Help Center</Link>

              <br />

              <Link href="/">Privacy</Link>

              <br />

              <Link href="/">Terms</Link>

              <br />

              <Link href="/">FAQ</Link>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 SkillVerse. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
