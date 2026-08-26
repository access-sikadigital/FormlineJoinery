import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import projectWalnut from "@/assets/project-walnut.jpg";
import projectWardrobe from "@/assets/project-wardrobe.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import detailBrass from "@/assets/detail-brass.jpg";
import workshop from "@/assets/workshop.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Custom Kitchens, Cabinetry & Commercial Joinery | Formline" },
      { name: "description", content: "Bespoke kitchens, cabinetry, commercial joinery and shop fitouts, designed and built in Melbourne." },
      { property: "og:title", content: "Services — Formline Joinery" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    n: "01",
    t: "Custom Kitchens",
    d: "Single islands to full culinary studios. Every joint, hinge, and surface is engineered for how you cook, host, and live. We build kitchens that act as the structural and aesthetic anchor of your home.",
    quote: "The kitchen is the architectural anchor of the home. We design it to disappear into the layout, or stand as its sculpted focal point.",
    img: projectWalnut,
    items: ["Signature kitchen islands", "Concealed sculleries & butler's pantries", "Integrated & flush appliance joinery", "Mitred natural stone & timber slab benchtops"],
    spec: "Precision-milled drawer boxes, soft-close hardware standard, custom veneers matching."
  },
  {
    n: "02",
    t: "Cabinetry & Joinery",
    d: "Walk-in dressing rooms, custom wardrobes, study libraries, and wine cellars. Bespoke joinery crafted to elevate every individual room, responding to the layout and lighting of your architecture.",
    quote: "Cabinetry should feel like an organic extension of the building's walls — quiet, satisfying to open, and timeless in detail.",
    img: projectWardrobe,
    items: ["Fully custom walk-in wardrobes", "Aged brass & leather-lined dressers", "Floor-to-ceiling study shelving", "Temperature-controlled timber wine rooms"],
    spec: "Solid timber carcasses, integrated lighting strips, hand-selected veneer sheets."
  },
  {
    n: "03",
    t: "Commercial Joinery",
    d: "High-traffic hospitality counter builds, workplace breakout zones, and retail fitout detailing. Working in partnership with developers, builders, and architects across Melbourne.",
    quote: "Commercial joinery demands extreme durability without sacrificing high-end aesthetic value. We engineer for both.",
    img: heroKitchen,
    items: ["Architectural lobby paneling", "Reception counter statement joinery", "Workplace collaboration pods", "Multi-residential apartment joinery packs"],
    spec: "Commercial-grade substrates, high-impact edge banding, compliance-certified finishes."
  },
  {
    n: "04",
    t: "Shop Fitouts",
    d: "End-to-end cafe, restaurant, bar, and retail boutique installations. We manage the process from design rendering and workshop fabrication through to on-site handover.",
    quote: "A commercial interior is the physical manifestation of a brand. Every joint, metal detail, and bench edge must tell the same story.",
    img: detailBrass,
    items: ["Bespoke cafe counters & coffee stations", "Retail clothing display wardrobes", "Banquette seating & booth framing", "Custom feature shelving & bar joinery"],
    spec: "Fully integrated service runs, coordinates with plumbing/electrical, quick turnaround."
  }
];

const capabilities = [
  {
    category: "01 / Engineering & CAD",
    items: ["3D CAD Cabinetry Modeling", "Material Curation & Sampling", "Detailed Workshop Drawings", "Architectural Plan Compliance"]
  },
  {
    category: "02 / Advanced Production",
    items: ["5-Axis CNC Milling & Routing", "Veneer Flitch Matching", "Stone Sub-base Assembly", "Premium Drawer Joinery"]
  },
  {
    category: "03 / Hand Detailing",
    items: ["Two-Pack Polyurethane Spraying", "Hand-Waxed Timber Finishes", "Pre-Assembly Dry Fittings", "Custom Brass Inlays & Pulls"]
  },
  {
    category: "04 / Transport & Fitout",
    items: ["Wrapped Secure Logistical Transport", "On-Site Joiner Installation", "Multi-trade Site Coordination", "Handover Defect-Free Guarantee"]
  }
];

function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  
  // Section refs for scroll tracking
  const s1Ref = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const s4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [s1Ref, s2Ref, s3Ref, s4Ref];
    
    const observers = refs.map((ref, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIdx(idx);
          }
        },
        {
          threshold: 0.25,
          rootMargin: "-15% 0px -40% 0px"
        }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="bg-offwhite text-charcoal min-h-screen">
      <Header variant="overlay" />

      {/* DOCK-STYLED CINEMATIC DARK HERO */}
      <section className="relative pt-40 md:pt-48 pb-20 bg-charcoal text-offwhite min-h-[90vh] flex flex-col justify-between grain-overlay overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img 
            src={heroKitchen} 
            alt="Formline Workshop Interior" 
            className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal to-charcoal" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-terracotta/[0.04] blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brass/[0.03] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 flex-grow flex flex-col justify-between">
          <div>
            <Reveal>
              <div className="flex items-center gap-2 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Our Disciplines</span>
              </div>
            </Reveal>
            
            <div className="grid lg:grid-cols-12 gap-8 items-end mt-4">
              <div className="lg:col-span-8">
                <Reveal delay={0.1}>
                  <h1 className="text-display text-5xl sm:text-6xl md:text-8xl lg:text-[9.5rem] leading-[0.88] tracking-tight text-offwhite font-black">
                    Design.<br />
                    Manufacture.<br />
                    <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">
                      Install
                    </span>
                    .
                  </h1>
                </Reveal>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <Reveal delay={0.18}>
                  <p className="text-offwhite/60 text-sm md:text-base leading-relaxed max-w-sm lg:ml-auto">
                    From bespoke residential kitchens to detailed commercial developments. We craft joinery packages end-to-end inside our Campbellfield workshop.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Interactive Scroll Anchor Row */}
          <div className="mt-16 pt-10 border-t border-offwhite/10">
            <Reveal delay={0.25}>
              <div className="space-y-4">
                <span className="text-[0.62rem] text-offwhite/40 tracking-widest uppercase font-bold block">
                  Jump to Discipline
                </span>
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                  {services.map((item, idx) => (
                    <button
                      key={item.n}
                      onClick={() => {
                        const refs = [s1Ref, s2Ref, s3Ref, s4Ref];
                        refs[idx].current?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="group flex items-center gap-3 text-left transition-colors"
                    >
                      <span className="text-display text-sm text-terracotta font-bold group-hover:text-brass transition-colors">
                        {item.n}
                      </span>
                      <span className="text-eyebrow text-offwhite/70 text-xs tracking-wider group-hover:text-offwhite transition-colors">
                        {item.t}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DYNAMIC SCROLL SHOWCASE */}
      <section className="relative py-12 md:py-24 bg-offwhite">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* STICKY IMAGE CONTAINER (Desktop only) */}
            <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-[18vh] lg:h-[68vh] rounded-none overflow-hidden">
              <div className="relative w-full h-full bg-charcoal overflow-hidden shadow-xl border border-charcoal/15">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIdx}
                    src={services[activeIdx].img}
                    alt={services[activeIdx].t}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Accent corner frame */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-terracotta/40 m-6" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-terracotta/40 m-6" />

                {/* Info badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-offwhite/90 backdrop-blur-md p-6 border border-charcoal/10 shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[0.62rem] text-terracotta tracking-widest font-bold uppercase block mb-1">
                        Active Discipline
                      </span>
                      <h4 className="text-display text-lg text-charcoal tracking-tight">
                        {services[activeIdx].t}
                      </h4>
                    </div>
                    <span className="text-display text-3xl font-bold text-charcoal/20">
                      {services[activeIdx].n}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SCROLLING TEXT CONTENTS */}
            <div className="lg:col-span-6 space-y-32 lg:space-y-48 py-12">
              
              {/* Service 1 */}
              <div ref={s1Ref} className="space-y-8 scroll-mt-24">
                <div className="lg:hidden w-full aspect-[16/10] bg-charcoal mb-8 relative overflow-hidden border border-charcoal/10">
                  <img src={services[0].img} alt={services[0].t} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 text-eyebrow text-offwhite bg-charcoal/70 px-3 py-1">{services[0].n}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-display text-xl text-terracotta font-bold">{services[0].n}</span>
                  <span className="h-px w-10 bg-charcoal/10" />
                  <span className="text-eyebrow text-charcoal/40 text-[0.65rem]">Residential Design</span>
                </div>

                <h2 className="text-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]">
                  {services[0].t}
                </h2>

                <p className="text-charcoal/80 text-base md:text-lg leading-relaxed">
                  {services[0].d}
                </p>

                {/* Luxury Quote Panel */}
                <div className="border-l-2 border-terracotta/40 pl-6 py-1">
                  <p className="text-serif-italic text-charcoal text-xl leading-relaxed">
                    "{services[0].quote}"
                  </p>
                </div>

                {/* Scope items checklist */}
                <div className="pt-6 space-y-4">
                  <h4 className="text-eyebrow text-charcoal font-semibold text-xs tracking-wider">Scope Deliverables</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {services[0].items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-charcoal/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-terracotta flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications Spec */}
                <div className="bg-cream border border-charcoal/8 p-5 text-xs text-charcoal/60 leading-relaxed">
                  <span className="font-bold text-charcoal uppercase block mb-1">Standard Specifications:</span>
                  {services[0].spec}
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="magnetic-btn px-8 py-4 rounded-none">
                    <span>Enquire on Kitchens</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>

              {/* Service 2 */}
              <div ref={s2Ref} className="space-y-8 scroll-mt-24">
                <div className="lg:hidden w-full aspect-[16/10] bg-charcoal mb-8 relative overflow-hidden border border-charcoal/10">
                  <img src={services[1].img} alt={services[1].t} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 text-eyebrow text-offwhite bg-charcoal/70 px-3 py-1">{services[1].n}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-display text-xl text-terracotta font-bold">{services[1].n}</span>
                  <span className="h-px w-10 bg-charcoal/10" />
                  <span className="text-eyebrow text-charcoal/40 text-[0.65rem]">Bespoke Carcasses</span>
                </div>

                <h2 className="text-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]">
                  {services[1].t}
                </h2>

                <p className="text-charcoal/80 text-base md:text-lg leading-relaxed">
                  {services[1].d}
                </p>

                {/* Luxury Quote Panel */}
                <div className="border-l-2 border-terracotta/40 pl-6 py-1">
                  <p className="text-serif-italic text-charcoal text-xl leading-relaxed">
                    "{services[1].quote}"
                  </p>
                </div>

                {/* Scope items checklist */}
                <div className="pt-6 space-y-4">
                  <h4 className="text-eyebrow text-charcoal font-semibold text-xs tracking-wider">Scope Deliverables</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {services[1].items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-charcoal/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-terracotta flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications Spec */}
                <div className="bg-cream border border-charcoal/8 p-5 text-xs text-charcoal/60 leading-relaxed">
                  <span className="font-bold text-charcoal uppercase block mb-1">Standard Specifications:</span>
                  {services[1].spec}
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="magnetic-btn px-8 py-4 rounded-none">
                    <span>Enquire on Cabinetry</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>

              {/* Service 3 */}
              <div ref={s3Ref} className="space-y-8 scroll-mt-24">
                <div className="lg:hidden w-full aspect-[16/10] bg-charcoal mb-8 relative overflow-hidden border border-charcoal/10">
                  <img src={services[2].img} alt={services[2].t} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 text-eyebrow text-offwhite bg-charcoal/70 px-3 py-1">{services[2].n}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-display text-xl text-terracotta font-bold">{services[2].n}</span>
                  <span className="h-px w-10 bg-charcoal/10" />
                  <span className="text-eyebrow text-charcoal/40 text-[0.65rem]">Architectural Scale</span>
                </div>

                <h2 className="text-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]">
                  {services[2].t}
                </h2>

                <p className="text-charcoal/80 text-base md:text-lg leading-relaxed">
                  {services[2].d}
                </p>

                {/* Luxury Quote Panel */}
                <div className="border-l-2 border-terracotta/40 pl-6 py-1">
                  <p className="text-serif-italic text-charcoal text-xl leading-relaxed">
                    "{services[2].quote}"
                  </p>
                </div>

                {/* Scope items checklist */}
                <div className="pt-6 space-y-4">
                  <h4 className="text-eyebrow text-charcoal font-semibold text-xs tracking-wider">Scope Deliverables</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {services[2].items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-charcoal/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-terracotta flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications Spec */}
                <div className="bg-cream border border-charcoal/8 p-5 text-xs text-charcoal/60 leading-relaxed">
                  <span className="font-bold text-charcoal uppercase block mb-1">Standard Specifications:</span>
                  {services[2].spec}
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="magnetic-btn px-8 py-4 rounded-none">
                    <span>Enquire on Commercial</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>

              {/* Service 4 */}
              <div ref={s4Ref} className="space-y-8 scroll-mt-24">
                <div className="lg:hidden w-full aspect-[16/10] bg-charcoal mb-8 relative overflow-hidden border border-charcoal/10">
                  <img src={services[3].img} alt={services[3].t} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 text-eyebrow text-offwhite bg-charcoal/70 px-3 py-1">{services[3].n}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-display text-xl text-terracotta font-bold">{services[3].n}</span>
                  <span className="h-px w-10 bg-charcoal/10" />
                  <span className="text-eyebrow text-charcoal/40 text-[0.65rem]">Turnkey Fitouts</span>
                </div>

                <h2 className="text-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]">
                  {services[3].t}
                </h2>

                <p className="text-charcoal/80 text-base md:text-lg leading-relaxed">
                  {services[3].d}
                </p>

                {/* Luxury Quote Panel */}
                <div className="border-l-2 border-terracotta/40 pl-6 py-1">
                  <p className="text-serif-italic text-charcoal text-xl leading-relaxed">
                    "{services[3].quote}"
                  </p>
                </div>

                {/* Scope items checklist */}
                <div className="pt-6 space-y-4">
                  <h4 className="text-eyebrow text-charcoal font-semibold text-xs tracking-wider">Scope Deliverables</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {services[3].items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-charcoal/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-terracotta flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications Spec */}
                <div className="bg-cream border border-charcoal/8 p-5 text-xs text-charcoal/60 leading-relaxed">
                  <span className="font-bold text-charcoal uppercase block mb-1">Standard Specifications:</span>
                  {services[3].spec}
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="magnetic-btn px-8 py-4 rounded-none">
                    <span>Enquire on Fitouts</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ADVANCED CAPABILITIES GRID TABLE */}
      <section className="py-24 md:py-36 bg-cream border-t border-charcoal/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Capabilities Matrix</span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <h2 className="text-display text-4xl md:text-5xl lg:text-6xl leading-[0.92] tracking-tight">
                  State of the art fabrication.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-charcoal/70 text-sm leading-relaxed mt-6 max-w-sm">
                  Our Campbellfield facility couples digital 3D engineering workflows with traditional handcrafting joiner benches to deliver flawless results at any scale.
                </p>
              </Reveal>
            </div>
            
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-12">
              {capabilities.map((cat, i) => (
                <Reveal key={cat.category} delay={i * 0.08}>
                  <div className="space-y-4">
                    <h3 className="text-display text-lg text-charcoal border-b border-charcoal/10 pb-3 font-semibold">
                      {cat.category}
                    </h3>
                    <ul className="space-y-2.5">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="text-charcoal/85 text-sm flex justify-between items-center">
                          <span>{item}</span>
                          <span className="h-1 w-1 bg-terracotta rounded-full opacity-60" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEXT-LEVEL SPLIT-SCREEN STATEMENT CTA */}
      <section className="bg-charcoal text-offwhite border-t border-offwhite/10 grain-overlay relative overflow-hidden">
        <div className="grid lg:grid-cols-12 items-stretch min-h-[65vh]">
          {/* Left Column — Immersive Workshop Visual */}
          <div className="lg:col-span-5 relative hidden lg:block overflow-hidden bg-charcoal/90">
            <img 
              src={workshop} 
              alt="Formline Campbellfield Workshop" 
              className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity scale-100 transition-transform duration-[8s] hover:scale-105" 
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 to-transparent mix-blend-overlay" />
            <div className="absolute bottom-12 left-12 right-12 z-10 space-y-4">
              <span className="text-[0.62rem] text-terracotta tracking-widest font-bold uppercase block">
                Local Production
              </span>
              <h4 className="text-display text-2xl text-offwhite leading-tight max-w-sm">
                Made in Melbourne. Installed Worldwide.
              </h4>
              <p className="text-offwhite/50 text-xs leading-relaxed max-w-xs">
                Every piece is fabricated at our Campbellfield workshop using sustainable local timbers and premium imported hardware.
              </p>
            </div>
            
            {/* Decorative frames */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-offwhite/20 m-8" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-offwhite/20 m-8" />
          </div>

          {/* Right Column — Call-to-Action Panel */}
          <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-12 lg:p-20 relative">
            <div className="absolute inset-0 pointer-events-none select-none">
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-terracotta/[0.03] blur-[100px]" />
            </div>

            <div className="relative z-10 space-y-8 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Start Your Journey</span>
              </div>

              <h2 className="text-display text-4xl sm:text-5xl md:text-7xl leading-[0.9] tracking-tight text-offwhite">
                Ready to construct your <br />
                <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">
                  ideal space
                </span>
                ?
              </h2>

              <p className="text-offwhite/60 text-sm md:text-base leading-relaxed max-w-lg">
                Book a private consult with our lead joiners at our Campbellfield workshop or on-site to walk through raw material boards, detailing samples, and project scopes.
              </p>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link 
                  to="/contact" 
                  className="bg-[#6C7454] hover:bg-[#5b6346] text-offwhite px-8 py-4.5 transition-all duration-300 font-semibold text-sm flex items-center justify-center gap-2 rounded-none hover:gap-3"
                >
                  <span>Book Consultation</span>
                  <span className="text-xs">→</span>
                </Link>
                <Link 
                  to="/portfolio" 
                  className="border border-offwhite/20 hover:border-offwhite/60 hover:bg-offwhite/5 text-offwhite px-8 py-4.5 transition-all duration-300 font-semibold text-sm rounded-none"
                >
                  View Selected Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
