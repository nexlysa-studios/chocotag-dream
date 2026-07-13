import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#home"
          className={`font-display text-2xl tracking-tight transition-colors ${
            scrolled ? "text-cocoa-deep" : "text-cream"
          }`}
        >
          choco<span className="italic text-accent">tag</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative text-[13px] font-medium uppercase tracking-[0.18em] transition-colors ${
                  scrolled
                    ? "text-cocoa-deep/80 hover:text-cocoa-deep"
                    : "text-cream/85 hover:text-cream"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/27835947040"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-gradient-gold px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-cocoa-deep shadow-soft transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Order Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-cocoa-deep" : "text-cream"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-in border-t border-border/60 bg-cream/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-[0.18em] text-cocoa-deep"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="https://wa.me/27835947040"
                className="inline-flex rounded-full bg-gradient-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cocoa-deep"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
