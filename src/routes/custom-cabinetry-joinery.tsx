import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import projectWardrobe from "@/assets/project-wardrobe.jpg";

export const Route = createFileRoute("/custom-cabinetry-joinery")({
  component: CustomCabinetry,
  head: () => ({
    meta: [
      { title: "Custom Cabinetry & Joinery Melbourne | Formline Joinery" },
      { name: "description", content: "Made-to-measure cabinetry & joinery for every room. Wardrobes, vanities, storage & feature joinery crafted in Melbourne. 25 years’ experience. Enquire today." },
      { property: "og:title", content: "Custom Cabinetry & Joinery Melbourne | Formline Joinery" },
      { property: "og:url", content: "/custom-cabinetry-joinery" },
    ],
    links: [{ rel: "canonical", href: "/custom-cabinetry-joinery" }],
  }),
});

function CustomCabinetry() {
  return (
    <div className="bg-offwhite text-charcoal min-h-screen">
      <Header variant="solid" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-charcoal text-offwhite overflow-hidden grain-overlay">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={heroKitchen} alt="Cabinetry Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-2 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest uppercase">Our Services</span>
            </div>
          </Reveal>
          
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <h1 className="text-display text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tight mb-8">
                  Custom cabinetry & joinery for every{" "}
                  <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">room</span>.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:pb-6">
              <Reveal delay={0.2}>
                <p className="text-offwhite/70 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                  From walk-in wardrobes to bathroom vanities, entertainment units to home offices, Formline Joinery creates bespoke cabinetry and joinery that fits your home perfectly. Made to measure in our Melbourne workshop, our joinery makes the most of every millimetre — beautifully.
                </p>
                <p className="text-offwhite/70 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                  25 years of craftsmanship, in every join.
                </p>
                <Link to="/contact" className="magnetic-btn px-8 py-4 inline-flex items-center gap-3">
                  <span>Get a Quote</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Badges */}
      <section className="bg-charcoal border-t border-white/10 text-offwhite py-8">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Made to measure",
              "Made in Melbourne",
              "Premium finishes",
              "Expert installation"
            ].map((badge, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-center justify-center text-center gap-3 border border-white/10 py-6 px-4 hover:bg-white/5 transition-colors">
                  <span className="text-terracotta">✦</span>
                  <span className="text-xs uppercase tracking-widest font-bold">{badge}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-36 bg-cream">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Text & Features */}
            <div className="flex flex-col justify-center">
              <Reveal delay={0.1}>
                <h2 className="text-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8">
                  Storage and joinery, tailored to your{" "}
                  <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">space</span>.
                </h2>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-12 max-w-xl">
                  Off-the-shelf furniture rarely fits the way you need it to. Our custom joinery is designed around your rooms, your storage needs and your style — maximising space and elevating the look of your home. Whether it’s a single statement piece or joinery throughout, every detail is crafted to order.
                </p>
              </Reveal>
            </div>

            {/* Image Block */}
            <Reveal>
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-charcoal relative overflow-hidden border border-charcoal/10 group">
                <img src={projectWardrobe} alt="Custom Joinery Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Offer (3 Cards) */}
      <section className="py-24 md:py-36 bg-offwhite">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-2 mb-16">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest uppercase">What We Offer</span>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Wardrobes & Storage", desc: "Walk-in robes, built-in wardrobes and clever storage designed to fit your space and your life." },
              { title: "Vanities & Bathroom Joinery", desc: "Moisture-resistant, made-to-measure vanities and cabinetry that bring warmth and function to bathrooms and laundries." },
              { title: "Living & Feature Joinery", desc: "Entertainment units, bookshelves, home offices and feature pieces that make a room feel finished." }
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-cream p-6 lg:p-10 border border-charcoal/10 h-full flex flex-col justify-center group hover:border-terracotta/30 transition-colors">
                  <span className="text-display text-4xl text-charcoal/10 mb-6 font-black group-hover:text-terracotta/20 transition-colors">0{i + 1}</span>
                  <h3 className="text-display text-2xl mb-4 break-words hyphens-auto">{card.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed text-sm">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 md:py-36 bg-charcoal text-offwhite grain-overlay">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 text-center">
          <Reveal>
            <h2 className="text-display text-4xl md:text-6xl leading-tight mb-8">
              The detail is the <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">difference</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-offwhite/70 text-lg max-w-2xl mx-auto mb-16">
              Joinery is all about the details — clean lines, seamless joins and finishes that feel considered. Our team brings a quarter century of experience to every piece, working with premium boards, veneers and hardware to deliver results you’ll be proud of for years.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="magnetic-btn px-10 py-5 bg-offwhite text-charcoal inline-flex items-center gap-3">
              <span>Start your custom joinery project</span>
              <span className="btn-arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Shared Stats Band */}
      <section className="border-t border-charcoal/10 bg-cream py-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-charcoal/10 [&>div]:py-8 md:[&>div]:py-0">
            <Reveal delay={0.1}><div className="flex flex-col gap-2"><span className="text-display text-5xl md:text-6xl text-charcoal">25+</span><span className="text-eyebrow text-xs tracking-widest text-charcoal/50 uppercase">Years of experience</span></div></Reveal>
            <Reveal delay={0.2}><div className="flex flex-col gap-2"><span className="text-display text-5xl md:text-6xl text-charcoal">400+</span><span className="text-eyebrow text-xs tracking-widest text-charcoal/50 uppercase">Projects completed</span></div></Reveal>
            <Reveal delay={0.3}><div className="flex flex-col gap-2"><span className="text-display text-xl sm:text-2xl md:text-4xl text-charcoal leading-snug sm:leading-loose">Melbourne-wide</span><span className="text-eyebrow text-xs tracking-widest text-charcoal/50 uppercase">Areas serviced</span></div></Reveal>
            <Reveal delay={0.4}><div className="flex flex-col gap-2"><span className="text-display text-xl sm:text-2xl md:text-4xl text-charcoal leading-snug sm:leading-loose">In-house</span><span className="text-eyebrow text-xs tracking-widest text-charcoal/50 uppercase">Design, make & install</span></div></Reveal>
          </div>
        </div>
      </section>

      {/* Shared Testimonials */}
      <section className="py-24 md:py-36 bg-offwhite">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-terracotta text-6xl block mb-8 font-serif">"</span>
              <p className="text-display text-2xl md:text-4xl text-charcoal leading-snug mb-8">
                Formline transformed our living space with beautiful custom cabinetry. The craftsmanship is next level and the whole team was a pleasure to deal with.
              </p>
              <span className="text-eyebrow text-sm tracking-widest text-charcoal/50 uppercase">— Michael, South Yarra</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
