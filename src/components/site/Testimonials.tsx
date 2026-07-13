import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const quotes = [
  {
    text: "Hands down the best chocolate desserts in Cape Town. The molten brownie is unforgettable.",
    name: "Amara N.",
    context: "Claremont",
  },
  {
    text: "It feels like a boutique — the plating, the smells, the attention to detail. A weekly ritual.",
    name: "Daniel P.",
    context: "Rondebosch",
  },
  {
    text: "Took my family for my daughter's birthday. The shakes are otherworldly and the staff were lovely.",
    name: "Kirsten R.",
    context: "Newlands",
  },
  {
    text: "You can taste the quality of the chocolate. Nothing in the city comes close.",
    name: "Sipho M.",
    context: "Cape Town CBD",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-cocoa-deep py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="mb-5 font-display text-[11px] uppercase tracking-[0.5em] text-gold-soft">
            Loved in Cape Town
          </p>
          <h2 className="font-display text-4xl leading-[1.05] text-cream md:text-5xl lg:text-6xl">
            A little <span className="italic text-gold-shimmer">obsession</span>.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="group flex flex-col rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-cream/[0.07]"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-cream/95">
                "{q.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-cream/10 pt-4">
                <p className="text-sm font-medium text-cream">{q.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-cream/60">{q.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
