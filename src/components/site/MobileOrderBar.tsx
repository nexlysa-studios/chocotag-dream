import { MessageCircle } from "lucide-react";

export function MobileOrderBar() {
  return (
    <a
      href="https://wa.me/27835947040"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-cocoa-deep shadow-luxe md:hidden"
    >
      <MessageCircle className="size-4" />
      Order via WhatsApp
    </a>
  );
}
