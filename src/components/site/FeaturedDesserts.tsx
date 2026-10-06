import { SectionHeading } from "./SectionHeading";
import waffle from "@/assets/dessert-waffle.jpg";
import brownie from "@/assets/dessert-brownie.jpg";
import pancakes from "@/assets/dessert-pancakes.jpg";
import shake from "@/assets/dessert-shake.jpg";
import sundae from "@/assets/dessert-sundae.jpg";
import icecream from "@/assets/dessert-icecream.jpg";

const items = [
  { img: waffle, name: "Belgian Waffles", desc: "Crisp, golden, drizzled with Belgian chocolate & fresh berries." },
  { img: brownie, name: "Molten Brownies", desc: "Warm fudge centres, cocoa dust, vanilla bean ice cream." },
  { img: pancakes, name: "Pancake Stacks", desc: "Fluffy stacks cascading with dark chocolate ganache." },
  { img: shake, name: "Signature Shakes", desc: "Thick, velvety milkshakes crowned with fresh cream." },
  { img: sundae, name: "Loaded Sundaes", desc: "Layered indulgence — sauce, nuts, cherries, cream." },
  { img: icecream, name: "Artisan Ice Cream", desc: "Small-batch scoops finished with 24k gold flakes." },
];

export function FeaturedDesserts() {
  return (
    <section id="menu" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Signature Menu"
          title={<>Handcrafted <span className="italic text-accent">indulgence</span>.</>}
          subtitle="Every dessert is prepared fresh to order using premium chocolate and the finest ingredients."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {items.map((it, i) => (
            <article
              key={it.name}
              className="group relative h-full overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:shadow-luxe"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-deep/70 via-cocoa-deep/10 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl text-cream md:text-3xl">{it.name}</h3>
                  <p className="mt-2 max-w-xs text-sm text-cream/85">{it.desc}</p>
                </div>
                {/* shine sweep */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-cocoa-deep/20 bg-cocoa-deep px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-cream transition-all hover:bg-cocoa"
          >
            View Full Menu
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
