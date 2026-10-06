import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedDesserts } from "@/components/site/FeaturedDesserts";
import { Experience } from "@/components/site/Experience";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <FeaturedDesserts />
      <Experience />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
