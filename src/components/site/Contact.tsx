import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-secondary py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-gradient-gold blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cocoa-deep/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="flex flex-col justify-center">
          <p className="mb-5 font-display text-[11px] uppercase tracking-[0.5em] text-accent">
            Say Hello
          </p>
          <h2 className="font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            Book a table, plan a party, or just say <span className="italic text-accent">hi</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Reservations, private events, gift vouchers — drop us a line and we'll get right back to you.
          </p>

          <a
            href="https://wa.me/27835947040"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-cocoa-deep px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-cream transition-all hover:bg-cocoa"
          >
            <MessageCircle className="size-4" />
            WhatsApp us on +27 83 594 7040
          </a>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="relative rounded-3xl border border-white/50 bg-card/70 p-8 shadow-luxe backdrop-blur-xl md:p-10"
        >
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="inline-flex size-16 items-center justify-center rounded-full bg-gradient-gold">
                <Send className="size-6 text-cocoa-deep" />
              </div>
              <h3 className="mt-6 font-display text-3xl">Thank you.</h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                We've received your message and will be in touch shortly.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Phone" name="phone" type="tel" placeholder="+27 …" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-cocoa-deep shadow-soft transition-transform hover:scale-[1.02]"
              >
                <Send className="size-4" />
                Send Message
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-full border border-border bg-background/60 px-5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  );
}
