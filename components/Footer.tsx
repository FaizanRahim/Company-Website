import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-24 max-w-6xl border-t border-mist/10 px-4 pb-10 pt-8 text-sm text-mist/50">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
        <div>
          <p className="font-display text-lg font-semibold text-mist">
            NorsTack<span className="text-sage">.</span>
          </p>
          <p className="mt-2 max-w-xs text-mist/40">
            IT solutions and digital engineering for teams that ship fast
            and scale further.
          </p>
        </div>

        <div className="flex gap-12">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-mist/40">
              Company
            </p>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-sage">About us</Link></li>
              <li><Link href="/projects" className="hover:text-sage">Projects</Link></li>
              <li><Link href="/pricing" className="hover:text-sage">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-mist/40">
              Follow us
            </p>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sage">LinkedIn</a></li>
              <li><a href="#" className="hover:text-sage">Facebook</a></li>
              <li><a href="#" className="hover:text-sage">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-mist/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} NorsTack. All rights reserved.</p>
        <p className="text-mist/30">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
