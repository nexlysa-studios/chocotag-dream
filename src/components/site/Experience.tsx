import { Heart, Sparkles, Users, Gift } from "lucide-react";
import cafe from "@/assets/Chocotag (8).webp";

const pillars = [
  { icon: Sparkles, label: "Premium ingredients", copy: "Sourced with obsession, tempered with care." },
  { icon: Heart, label: "Freshly prepared", copy: "Made to order — never sitting on a shelf." },
  { icon: Users, label: "For every moment", copy: "Dates, families, celebrations, weekday treats." },
  { icon: Gift, label: "Handcrafted", copy: "Every plate finished by hand, never rushed." },
];

export function Experience() {
  return (
    <section id="about" className="relative bg-secondary py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-luxe">
            <img
              src={cafe}
              alt="Chocotag chocolate café interior"
              width={1600}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden rounded-3xl bg-cocoa-deep px-8 py-6 shadow-luxe md:block">
            <p className="font-display text-4xl text-gold-shimmer">13.6k+</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-cream/80">
              Cape Town chocolate lovers
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-5 font-display text-[11px] uppercase tracking-[0.5em] text-accent">
            The Chocotag Experience
          </p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            A boutique dedicated to the <span className="italic text-accent">craft of chocolate.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Tucked into Cavendish Close, Chocotag is where Cape Town comes for its most
            indulgent chocolate desserts. Every plate is a small ceremony — poured, dusted
            and finished in front of you.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <li
                key={p.label}
                className="group flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-cocoa-deep">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">{p.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
