import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/Chocotag (1).webp";
import g2 from "@/assets/Chocotag (2).webp";
import g3 from "@/assets/Chocotag (3).webp";
import g4 from "@/assets/Chocotag (4).webp";
import g5 from "@/assets/Chocotag (6).webp";
import g6 from "@/assets/Chocotag (7).webp";

const shots = [
  { src: g2, alt: "Premium dessert spread at Chocotag", span: "row-span-2" },
  { src: g1, alt: "Chocolate dessert with a warm café presentation", span: "" },
  { src: g3, alt: "Dessert and coffee setup on a café table", span: "" },
  { src: g4, alt: "Café seating and interior atmosphere", span: "row-span-2" },
  { src: g5, alt: "Close-up of a chocolate dessert plate", span: "" },
  { src: g6, alt: "Boutique dessert café storefront and seating", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title={<>A little <span className="italic text-accent">taste</span> of the boutique.</>}
          subtitle="Fresh from the pass, styled with the same care you'll find on your table."
        />

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px] md:gap-5">
          {shots.map((s, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cocoa-deep/0 transition-colors duration-500 group-hover:bg-cocoa-deep/30" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cocoa-deep">
                  Chocotag
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
