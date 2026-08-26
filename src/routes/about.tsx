import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import workshop from "@/assets/workshop.jpg";
import craftHands from "@/assets/craft-hands.jpg";
import materials from "@/assets/materials.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import detailBrass from "@/assets/detail-brass.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Formline Joinery | Melbourne Custom Kitchens & Cabinetry" },
      { name: "description", content: "Formline Joinery has been building custom kitchens and architectural cabinetry in Melbourne for 25 years. Made in-house in Campbellfield." },
      { property: "og:title", content: "About — Formline Joinery" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <div className="bg-offwhite text-charcoal">
      <Header variant="solid" />
      <AboutHero />
      <WhyChooseUs />
      <OurApproach />
      <FAQSection />
      <Suppliers />
      <AboutCTA />
      <Footer />
    </div>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroKitchen} alt="Custom Formline kitchen" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="absolute inset-0 grain-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 pt-44 md:pt-56 pb-28 md:pb-40">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Headline */}
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-1.5 w-1.5 bg-terracotta rounded-full" />
                <span className="text-eyebrow text-terracotta text-[0.68rem]">About Formline · Est. 1999</span>
                <span className="h-px flex-1 max-w-[80px] bg-offwhite/20" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-display text-offwhite text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.88]">
                Built on craft.{" "}
                <br className="hidden md:block" />
                Grown by{" "}
                <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">
                  referral
                </span>
                .
              </h1>
            </Reveal>
          </div>

          {/* Intro + CTA */}
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <p className="text-offwhite/70 leading-relaxed text-sm md:text-base mb-8">
                For 25 years, Formline Joinery has been manufacturing custom kitchens and architectural cabinetry for Melbourne’s most considered homes and commercial spaces. What started in a small Cremorne workshop in 1999 has grown into a state-of-the-art facility in Campbellfield. We still build every piece in-house, we still hand-select our timber and stone, and we still rely on word of mouth from happy clients.
              </p>
              <Link to="/contact" className="magnetic-btn px-8 py-4 rounded-none">
                <span>Contact Us</span>
                <span className="btn-arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WHY CHOOSE US — Progressive Auto-Tabbing Gallery Showcase
   ============================================================ */
function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const features = [
    {
      icon: "◈",
      title: "25 Years of Experience",
      desc: "A quarter century crafting kitchens and joinery for Melbourne homes and businesses.",
      detail: "Est. 1999",
      img: workshop
    },
    {
      icon: "⌂",
      title: "Made in Melbourne",
      desc: "Designed, manufactured and finished in our Campbellfield workshop — never outsourced.",
      detail: "Local Craft",
      img: craftHands
    },
    {
      icon: "✦",
      title: "Custom, Always",
      desc: "Every project is made to measure. No flat-pack, no off-the-shelf compromises.",
      detail: "100% Bespoke",
      img: materials
    },
    {
      icon: "◆",
      title: "Premium Materials",
      desc: "We build with trusted brands like Polytec, Laminex and Caesarstone.",
      detail: "Trusted Brands",
      img: detailBrass
    },
    {
      icon: "⟐",
      title: "End-to-End Service",
      desc: "From concept and design to manufacture and install, one team handles it all.",
      detail: "One Team",
      img: heroKitchen
    },
    {
      icon: "♦",
      title: "Built on Referrals",
      desc: "Most of our work comes from happy clients recommending us to others.",
      detail: "Word of Mouth",
      img: craftHands
    },
  ];

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-progress configuration
  const duration = 5000; // 5 seconds per tab

  useEffect(() => {
    setIsTransitioning(false);
    
    // Smooth reset and trigger for hardware accelerated CSS animations
    const raf = requestAnimationFrame(() => {
      setIsTransitioning(true);
    });

    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, duration);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [activeIndex]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-cream py-24 md:py-36 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 md:mb-28 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Why Us</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display text-5xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tight">
                Why homeowners{" "}
                <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">
                  choose us
                </span>
                .
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <p className="text-charcoal/65 text-sm md:text-base leading-relaxed max-w-sm lg:ml-auto">
                Built on precision, premium materials, and a quarter-century of uncompromising Melbourne craftsmanship.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 2-Column Split: Sticky Image Left, Tabbing Accordion Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Sticky Left Column: Interactive Image Frame */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative aspect-[4/5] overflow-hidden border border-charcoal/10 shadow-2xl bg-charcoal">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    i === activeIndex ? "opacity-95 scale-100 animate-fade-in" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <img
                    src={f.img}
                    alt={f.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/10" />
                </div>
              ))}
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10 bg-offwhite/90 backdrop-blur-sm px-5 py-3 border border-charcoal/10">
                <span className="text-eyebrow text-charcoal/80 text-[0.62rem] uppercase tracking-wider">
                  {features[activeIndex].detail}
                </span>
                <span className="text-display text-sm text-terracotta">
                  {features[activeIndex].icon}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Progressive Accordion list */}
          <div className="lg:col-span-7 divide-y divide-charcoal/10 border-t border-b border-charcoal/10">
            {features.map((f, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={f.title}
                  onClick={() => handleTabClick(i)}
                  className={`py-8 cursor-pointer transition-all duration-300 relative ${
                    isActive ? "ps-4 md:ps-8 bg-charcoal/[0.01]" : "hover:ps-2"
                  }`}
                >
                  {/* Progressive Border Indicator - Left vertical track on active */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-charcoal/5">
                      <div
                        className="w-full bg-terracotta"
                        style={{
                          height: isTransitioning ? "100%" : "0%",
                          transition: isTransitioning ? `height ${duration}ms linear` : "none",
                        }}
                      />
                    </div>
                  )}

                  <div className="flex gap-6 md:gap-10 items-start">
                    {/* Index */}
                    <div className={`text-display text-lg md:text-xl transition-colors duration-300 ${
                      isActive ? "text-terracotta animate-pulse" : "text-charcoal/40"
                    }`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className={`text-display text-2xl md:text-3xl lg:text-4xl leading-tight transition-all duration-300 ${
                          isActive ? "text-terracotta" : "text-charcoal/80 hover:text-charcoal"
                        }`}>
                          {f.title}
                        </h3>
                        <span className="text-[0.6rem] text-charcoal/40 uppercase tracking-widest hidden md:inline">
                          {f.detail}
                        </span>
                      </div>

                      {/* Expandable description */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive ? "max-h-24 opacity-100 mt-3" : "max-h-0 opacity-0"
                      }`}>
                        <p className="text-charcoal/70 text-sm md:text-base leading-relaxed max-w-xl">
                          {f.desc}
                        </p>
                        
                        {/* Horizontal bottom progress bar for mobile/desktop layout accent */}
                        <div className="relative w-full h-[2px] bg-charcoal/5 mt-4 overflow-hidden lg:hidden">
                          <div 
                            className="absolute top-0 left-0 h-full bg-terracotta"
                            style={{
                              width: isTransitioning ? "100%" : "0%",
                              transition: isTransitioning ? `width ${duration}ms linear` : "none",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   OUR APPROACH — Image + Text Split
   ============================================================ */
function OurApproach() {
  return (
    <section className="bg-charcoal text-offwhite py-24 md:py-36 grain-overlay relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Our Approach</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display text-4xl md:text-6xl lg:text-7xl leading-[0.88] mb-16 md:mb-24 max-w-3xl">
            How we{" "}
            <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">
              work
            </span>
            .
          </h2>
        </Reveal>

        {/* Split Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <Reveal>
            <div className="relative group overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden border border-offwhite/10">
                <img
                  src={craftHands}
                  alt="Hand-crafted joinery detail"
                  className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              </div>
              {/* Floating Label */}
              <div className="absolute bottom-6 left-6 bg-charcoal/80 backdrop-blur-sm border border-offwhite/15 px-4 py-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-terracotta rounded-full" />
                <span className="text-eyebrow text-offwhite/80 text-[0.62rem]">Campbellfield Workshop</span>
              </div>
            </div>
          </Reveal>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <Reveal delay={0.15}>
              <p className="text-offwhite/70 text-base md:text-lg leading-relaxed mb-8">
                Formline isn’t just a showroom. We are designers, cabinet makers, and installers. When you work with us, you deal directly with the people making your joinery.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-offwhite/70 text-base md:text-lg leading-relaxed mb-10">
                Our Campbellfield facility houses both our design studio and our manufacturing floor — meaning there is zero disconnect between the plans you sign off and the kitchen we build.
              </p>
            </Reveal>

            {/* Stats Row */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-offwhite/15">
                {[
                  { n: "25+", l: "Years" },
                  { n: "200+", l: "Projects" },
                  { n: "100%", l: "In-House" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-display text-2xl md:text-3xl text-terracotta mb-1">{s.n}</div>
                    <div className="text-eyebrow text-offwhite/50 text-[0.62rem]">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Second Image */}
            <Reveal delay={0.35}>
              <div className="mt-10 group overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden border border-offwhite/10">
                  <img
                    src={materials}
                    alt="Creating friendly and safe kitchen spaces"
                    className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="h-px w-6 bg-terracotta" />
                  <span className="text-eyebrow text-offwhite/50 text-[0.62rem]">Creating friendly and safe kitchen spaces</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function FAQItem({ question, answer, isOpen, toggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={toggle}
        className="w-full py-6 md:py-8 flex items-center justify-between gap-6 text-left group"
      >
        <h3 className="text-display text-lg md:text-xl lg:text-2xl group-hover:text-terracotta transition-colors">
          {question}
        </h3>
        <div className={`flex-shrink-0 h-10 w-10 border border-charcoal/20 flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-terracotta border-terracotta rotate-45" : "group-hover:border-terracotta"
        }`}>
          <span className={`text-lg transition-colors ${isOpen ? "text-offwhite" : "text-charcoal/60"}`}>+</span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-out ${
        isOpen ? "max-h-60 pb-6 md:pb-8" : "max-h-0"
      }`}>
        <p className="text-charcoal/65 text-sm md:text-base leading-relaxed max-w-3xl pl-0 md:pl-2">
          {answer}
        </p>
      </div>
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Do you have a showroom?",
      a: "We don’t run a traditional retail showroom. Instead, we invite clients to our Campbellfield workshop where you can see our manufacturing process, review material samples (timber, stone, laminates) and sit down with our design team.",
    },
    {
      q: "Where do you manufacture?",
      a: "Everything is built at our Campbellfield workshop in Melbourne’s north.",
    },
    {
      q: "Who installs the joinery?",
      a: "Our own team. We don’t hand your project over to third-party contractors for the most important step. The team that builds your kitchen is the team that installs it.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-offwhite py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — Header */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">FAQ</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl leading-[0.88] mb-6">
                Questions about working with{" "}
                <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">
                  Formline
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
                Essential answers for future clients. Can't find what you're looking for?
              </p>
              <Link
                to="/contact"
                className="flex items-center gap-2 text-eyebrow text-terracotta text-[0.7rem] hover:gap-3 transition-all"
              >
                <span className="h-px w-6 bg-terracotta" />
                Get in Touch
              </Link>
            </Reveal>
          </div>

          {/* Right — Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-charcoal/10">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 0.05}>
                  <FAQItem
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openIndex === i}
                    toggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SUPPLIERS — Dark Immersive Grid
   ============================================================ */
function Suppliers() {
  const suppliers = [
    { name: "Polytec", desc: "Premium decorative surfaces and panels for every application.", accent: "Surfaces" },
    { name: "Laminex", desc: "Australia's most trusted name in laminates and engineered surfaces.", accent: "Laminates" },
    { name: "Caesarstone", desc: "Premium quartz surfaces for kitchens and bathrooms.", accent: "Quartz" },
    { name: "Blum", desc: "World-class hardware for hinges, drawer systems and lift mechanisms.", accent: "Hardware" },
    { name: "Hettich", desc: "Precision-engineered fittings for modern cabinetry.", accent: "Fittings" },
    { name: "Dekton", desc: "Ultra-compact surfaces for benchtops and splashbacks.", accent: "Surfaces" },
    { name: "Dulux", desc: "Premium paint and coatings for flawless finishes.", accent: "Coatings" },
    { name: "Häfele", desc: "Innovative furniture fittings and architectural hardware.", accent: "Hardware" },
  ];

  return (
    <section className="bg-charcoal text-offwhite py-24 md:py-36 grain-overlay relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-terracotta/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Our Suppliers</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display text-4xl md:text-6xl lg:text-7xl leading-[0.88]">
                Partners in creating{" "}
                <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">
                  dream kitchens
                </span>
                .
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-offwhite/50 text-sm leading-relaxed max-w-md lg:ml-auto">
                We partner with industry-leading brands to ensure every surface, fitting and finish meets the standard our clients expect.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Supplier Grid — 4x2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-offwhite/10 border border-offwhite/10">
          {suppliers.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <div className="group bg-charcoal p-4 md:p-8 lg:p-10 flex flex-col justify-between h-full cursor-default hover:bg-offwhite/[0.04] transition-all duration-500 relative overflow-hidden">
                {/* Large Ghost Letter */}
                <div className="absolute -top-4 -right-2 text-display text-[7rem] md:text-[9rem] leading-none text-offwhite/[0.03] select-none pointer-events-none group-hover:text-offwhite/[0.06] transition-colors duration-700">
                  {s.name.charAt(0)}
                </div>

                {/* Top: Tag + Index */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6 md:mb-10">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-terracotta rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-eyebrow text-offwhite/40 text-[0.58rem]">{s.accent}</span>
                    </div>
                    <span className="text-eyebrow text-offwhite/20 text-[0.58rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Bottom: Name + Desc */}
                <div className="relative z-10">
                  <h3 className="text-display text-lg sm:text-2xl md:text-3xl mb-3 group-hover:text-terracotta transition-colors duration-300 leading-tight break-words hyphens-auto">
                    {s.name}
                  </h3>
                  <p className="text-offwhite/40 text-xs leading-relaxed group-hover:text-offwhite/60 transition-colors max-w-[200px]">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <Reveal delay={0.35}>
          <div className="mt-12 pt-8 border-t border-offwhite/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8 flex-wrap">
              {["Australian Made", "Industry Certified", "Premium Grade Only"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-terracotta rounded-full" />
                  <span className="text-eyebrow text-offwhite/40 text-[0.62rem]">{badge}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-eyebrow text-terracotta text-[0.68rem] hover:gap-3 transition-all"
            >
              <span className="h-px w-6 bg-terracotta" />
              Discuss Materials
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT CTA — Full-Width Image Banner
   ============================================================ */
function AboutCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={detailBrass} alt="Formline joinery detail" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="absolute inset-0 grain-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-1.5 w-1.5 bg-terracotta rounded-full" />
            <span className="text-eyebrow text-terracotta text-[0.68rem]">Start the Conversation</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display text-offwhite text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.88] max-w-4xl mx-auto mb-6">
            Ready to start your{" "}
            <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">
              project
            </span>
            ?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-offwhite/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-12">
            Whether it's a kitchen, a library wall, or an entire home of bespoke cabinetry — every project begins with a conversation.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/contact" className="magnetic-btn px-10 py-5 rounded-none">
              <span>Request a Quote</span>
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/portfolio" className="btn-outline px-10 py-5 text-offwhite border-offwhite/25 hover:border-offwhite rounded-none">
              <span>View Portfolio</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
