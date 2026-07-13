import { MapPin, Clock, Mail, Navigation } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5 lg:gap-14 lg:px-10">
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-3xl shadow-luxe">
            <iframe
              title="Chocotag location map"
              src="https://www.google.com/maps?q=Cavendish+Close+Warwick+Street+Claremont+Cape+Town&output=embed"
              className="h-[480px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <aside className="lg:col-span-2 flex flex-col justify-center">
          <p className="mb-5 font-display text-[11px] uppercase tracking-[0.5em] text-accent">
            Find us
          </p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-5xl">
            Visit the boutique.
          </h2>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-cocoa-deep">
                <MapPin className="size-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Address</p>
                <p className="mt-1 text-base text-foreground">
                  Cavendish Close, Warwick Street<br />Claremont, Cape Town
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  In the parking lot, opposite Spur
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-cocoa-deep">
                <Clock className="size-4" />
              </span>
              <div className="text-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Opening hours</p>
                <dl className="mt-2 space-y-1 text-foreground">
                  <div className="flex justify-between gap-8"><dt className="text-muted-foreground">Mon–Thu</dt><dd>10am – 9pm</dd></div>
                  <div className="flex justify-between gap-8"><dt className="text-muted-foreground">Fri–Sat</dt><dd>9am – 11pm</dd></div>
                  <div className="flex justify-between gap-8"><dt className="text-muted-foreground">Sunday</dt><dd>9am – 9pm</dd></div>
                </dl>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-cocoa-deep">
                <Mail className="size-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</p>
                <a
                  href="mailto:info@chocotagcpt.com"
                  className="mt-1 block text-base text-foreground hover:text-accent"
                >
                  info@chocotagcpt.com
                </a>
              </div>
            </li>
          </ul>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Cavendish+Close+Warwick+Street+Claremont+Cape+Town"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-cocoa-deep px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-cream transition-all hover:bg-cocoa"
          >
            <Navigation className="size-4" />
            Get Directions
          </a>
        </aside>
      </div>
    </section>
  );
}
