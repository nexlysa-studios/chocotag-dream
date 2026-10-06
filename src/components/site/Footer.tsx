import { Instagram, Mail, MapPin } from "lucide-react";
import newLogo from "@/assets/newlogo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src={newLogo}
              alt="Chocotag logo"
              className="h-12 w-auto object-contain md:h-14"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The home of premium chocolate desserts in Cape Town. Handcrafted, freshly
              prepared, always a little indulgent.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Explore
            </p>
            <ul className="space-y-2 text-sm">
              {["Menu", "About", "Gallery", "Location", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-foreground/80 transition-colors hover:text-accent"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Visit
            </p>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                Cavendish Close, Warwick St<br />Claremont, Cape Town
              </li>
              <li>
                <a href="mailto:info@chocotagcpt.com" className="flex gap-2 hover:text-accent">
                  <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                  info@chocotagcpt.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/chocotagcpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 hover:text-accent"
                >
                  <Instagram className="mt-0.5 size-4 shrink-0 text-accent" />
                  @chocotagcpt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Chocotag Chocolate Café. All rights reserved.</p>
          <p>
            Designed by <span className="font-medium text-foreground">Nexly</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
