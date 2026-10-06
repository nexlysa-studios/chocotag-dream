import heroImg from "@/assets/Chocotag (5).webp";
import heroVideo from "@/assets/Chocotag-hero.mp4";

export function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        poster={heroImg}
        src={heroVideo}
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />
      <img
        src={heroImg}
        alt="Chocotag dessert table with premium chocolate creations"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-cocoa-deep/25" />

      {/* Chocolate drip from top */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="animate-drip absolute inset-x-0 top-0 h-24 w-full text-cocoa-deep md:h-32"
      >
        <path
          fill="currentColor"
          d="M0,0 H1440 V60 C1380,60 1370,110 1320,110 C1270,110 1260,70 1210,70 C1160,70 1150,130 1100,130 C1050,130 1040,80 990,80 C940,80 930,120 880,120 C830,120 820,60 770,60 C720,60 710,140 660,140 C610,140 600,80 550,80 C500,80 490,120 440,120 C390,120 380,70 330,70 C280,70 270,110 220,110 C170,110 160,80 110,80 C60,80 50,110 0,110 Z"
        />
      </svg>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-cream">
        <div className="animate-rise" style={{ animationDelay: "0.3s" }}>
          <p className="mb-6 font-display text-xs uppercase tracking-[0.55em] text-gold-soft md:text-sm">
            Claremont · Cape Town
          </p>
        </div>

        <h1
          className="hero-title shiny-text animate-rise font-display text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.5s" }}
        >
          The Home of{" "}
          <span className="italic">Premium</span>
          <br />
          Chocolate Desserts.
        </h1>

        <p
          className="animate-rise mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg"
          style={{ animationDelay: "0.75s" }}
        >
          Freshly prepared waffles, pancakes, brownies, shakes and handcrafted
          chocolate creations — served in a warm boutique setting.
        </p>

        <div
          className="animate-rise mt-12 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.95s" }}
        >
          <a
            href="#menu"
            className="rounded-full bg-cream px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-cocoa-deep transition-all hover:bg-white hover:shadow-luxe"
          >
            View Menu
          </a>
          <a
            href="https://wa.me/27835947040"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-cocoa-deep transition-all hover:scale-[1.03] hover:shadow-luxe"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <div className="h-10 w-px bg-cream/50" />
        </div>
      </div>
    </section>
  );
}
