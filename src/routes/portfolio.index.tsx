import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import workshop from "@/assets/workshop.jpg";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioIndex,
  head: () => ({
    meta: [
      { title: "Portfolio — Bespoke Custom Kitchens & Cabinetry | Formline" },
      { name: "description", content: "Selected kitchens, cabinetry and commercial joinery projects delivered by Formline across Melbourne." },
      { property: "og:title", content: "Portfolio — Formline Joinery" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

const FILTERS = ["All", "Kitchens", "Cabinetry", "Shop Fitouts"] as const;

function PortfolioIndex() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Mouse move listener for floating cursor preview portal
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Filter projects (note we map 'Shop Fitouts' correctly)
  const list = filter === "All" 
    ? projects 
    : projects.filter((p) => {
        if (filter === "Shop Fitouts") return p.category === "Shop Fitouts" || p.category === "Commercial";
        return p.category === filter;
      });

  // Featured Project (uses Hawthorn Residence as index 0)
  const featuredProject = projects[0];

  return (
    <div className="bg-offwhite text-charcoal min-h-screen">
      <Header variant="overlay" />

      {/* LUXURY HERO HEADER — Dark Cinematic Theme */}
      <section className="relative pt-40 md:pt-48 pb-20 bg-charcoal text-offwhite min-h-[85vh] flex flex-col justify-between grain-overlay overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img 
            src={heroKitchen} 
            alt="Formline Kitchen Showcase" 
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
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Selected Works</span>
              </div>
            </Reveal>
            
            <div className="grid lg:grid-cols-12 gap-8 items-end mt-4">
              <div className="lg:col-span-8">
                <Reveal delay={0.1}>
                  <h1 className="text-display text-5xl sm:text-6xl md:text-8xl lg:text-[9.5rem] leading-[0.88] tracking-tight text-offwhite font-black">
                    Selected<br />
                    <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">
                      projects
                    </span>
                    .
                  </h1>
                </Reveal>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <Reveal delay={0.18}>
                  <p className="text-offwhite/60 text-sm md:text-base leading-relaxed max-w-sm lg:ml-auto">
                    A curated archive of Melbourne's finest residential kitchens, detailed walk-in wardrobes, and statement hospitality fitouts constructed over 25 years.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="mt-10 md:mt-16 pt-8 md:pt-10 border-t border-offwhite/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Reveal delay={0.25}>
              <div>
                <span className="text-[0.62rem] text-offwhite/40 tracking-widest uppercase font-bold block mb-1">Total Builds</span>
                <span className="text-display text-2xl font-bold text-offwhite break-words">500+ Projects</span>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div>
                <span className="text-[0.62rem] text-offwhite/40 tracking-widest uppercase font-bold block mb-1">Workshop Scale</span>
                <span className="text-display text-2xl font-bold text-offwhite break-words">Campbellfield</span>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div>
                <span className="text-[0.62rem] text-offwhite/40 tracking-widest uppercase font-bold block mb-1">Standard Guarantee</span>
                <span className="text-display text-2xl font-bold text-offwhite break-words">10 Year Warranty</span>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div>
                <span className="text-[0.62rem] text-offwhite/40 tracking-widest uppercase font-bold block mb-1">Production Target</span>
                <span className="text-display text-2xl font-bold text-offwhite break-words">Defect-Free</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MASTERPIECE FEATURED BANNER */}
      {featuredProject && (
        <section className="bg-offwhite py-20 md:py-28 border-b border-charcoal/10">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <Reveal>
              <div className="flex items-center gap-2 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Featured Masterpiece</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link 
                to="/portfolio/$slug" 
                params={{ slug: featuredProject.slug }}
                className="group block relative w-full h-[60vh] md:h-[75vh] overflow-hidden border border-charcoal/15 bg-charcoal"
              >
                {/* Background parallax image */}
                <img 
                  src={featuredProject.cover} 
                  alt={featuredProject.title} 
                  className="w-full h-full object-cover opacity-80 scale-100 group-hover:scale-102 transition-transform duration-[10s] ease-out"
                />
                
                {/* Visual shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                
                {/* Info Text overlays */}
                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div className="space-y-3">
                    <span className="text-eyebrow text-terracotta bg-offwhite/95 px-3 py-1.5 font-bold text-[0.62rem] tracking-wider rounded-none inline-block">
                      {featuredProject.category} · {featuredProject.year}
                    </span>
                    <h2 className="text-display text-3xl sm:text-4xl md:text-6xl text-offwhite tracking-tight leading-none uppercase">
                      {featuredProject.title}
                    </h2>
                    <p className="text-offwhite/70 text-sm md:text-base max-w-md leading-relaxed font-normal">
                      {featuredProject.intro}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-eyebrow text-offwhite group-hover:text-terracotta transition-colors font-bold text-xs">
                    <span>Explore Masterpiece</span>
                    <div className="h-10 w-10 border border-offwhite/20 group-hover:border-terracotta flex items-center justify-center transition-all duration-300">
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* STICKY ARCHITECTURAL FILTER DOCK */}
      <section className="border-b border-charcoal/10 py-4 md:py-6 sticky top-[41px] md:top-[45px] z-30 bg-offwhite/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-eyebrow px-4 py-2 transition-all duration-300 relative font-semibold text-xs tracking-widest uppercase ${
                  filter === f ? "text-terracotta" : "text-charcoal/40 hover:text-charcoal"
                }`}
              >
                <span>{f}</span>
                {filter === f && (
                  <motion.div 
                    layoutId="activeFilterDot"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-terracotta"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          
          <div className="text-[0.65rem] text-charcoal/40 tracking-widest uppercase font-bold hidden sm:block">
            Archived {list.length} of {projects.length} Works
          </div>
        </div>
      </section>

      {/* INTERACTIVE MOUSE-FOLLOWER IMAGE PORTAL (Desktop only) */}
      <div className="hidden lg:block">
        <motion.div
          className="pointer-events-none fixed z-50 overflow-hidden w-[420px] h-[280px] border border-charcoal/15 shadow-2xl bg-charcoal bg-grain-overlay"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 140,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: hoveredIdx !== null ? 1 : 0,
            scale: hoveredIdx !== null ? 1 : 0.8,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
              {hoveredIdx !== null && list[hoveredIdx] && (
                <motion.img
                  key={hoveredIdx}
                  src={list[hoveredIdx].cover}
                  alt=""
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </AnimatePresence>
            <div className="absolute top-4 left-4 bg-offwhite/90 backdrop-blur-sm px-2.5 py-1 text-[0.55rem] text-charcoal tracking-widest uppercase font-bold">
              {hoveredIdx !== null && list[hoveredIdx] ? list[hoveredIdx].category : ""}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ULTRA-PREMIUM INTERACTIVE ARCHIVE LIST */}
      <section className="bg-offwhite py-12 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="border-t border-charcoal/10">
            {list.map((p, idx) => (
              <Link 
                key={p.slug}
                to="/portfolio/$slug" 
                params={{ slug: p.slug }}
                className="group block"
              >
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="border-b border-charcoal/10 py-10 md:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer transition-colors duration-500 hover:bg-cream/45 px-6 md:px-10"
                >
                  {/* Left Column — Index & Title */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-5 md:gap-10">
                    <div className="flex items-center justify-between lg:hidden">
                       <span className="text-display text-sm text-terracotta font-bold tracking-normal block">
                         0{idx + 1}
                       </span>
                       <span className="text-[0.62rem] text-charcoal/40 tracking-widest uppercase font-bold block">
                         {p.category}
                       </span>
                    </div>

                    <span className="hidden lg:block text-display text-base text-terracotta font-bold tracking-normal mt-1 lg:mt-0">
                      0{idx + 1}
                    </span>
                    
                    {/* Mobile Only Inline Image Preview */}
                    <div className="lg:hidden w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-charcoal/10 flex-shrink-0">
                      <img src={p.cover} alt="" className="w-full h-full object-cover" />
                    </div>

                    <h3 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] tracking-tight leading-none text-charcoal group-hover:text-terracotta lg:group-hover:pl-4 transition-all duration-500 font-black">
                      {p.title}
                    </h3>
                  </div>

                  {/* Right Column — Scope & Action */}
                  <div className="flex items-center justify-between lg:justify-end gap-12 text-right lg:pl-16">
                    <div className="text-left lg:text-right hidden lg:block">
                      <span className="text-[0.62rem] text-charcoal/40 tracking-widest uppercase font-bold block mb-1">
                        {p.category}
                      </span>
                      <span className="text-display text-sm text-charcoal">
                        {p.location}
                      </span>
                    </div>
                    
                    <div className="lg:hidden text-left">
                       <span className="text-display text-sm text-charcoal">
                        {p.location}
                      </span>
                    </div>
                    
                    <div className="h-11 w-11 border border-charcoal/10 group-hover:border-terracotta rounded-none flex items-center justify-center text-charcoal/40 group-hover:text-terracotta transition-all duration-300 group-hover:rotate-45 shrink-0">
                      <span className="text-sm font-semibold">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LUXURY BRIDGING STATEMENT CTA */}
      <section className="bg-charcoal text-offwhite border-t border-offwhite/10 grain-overlay relative overflow-hidden">
        <div className="grid lg:grid-cols-12 items-stretch min-h-[65vh]">
          {/* Left Column — Immersive Workshop Visual */}
          <div className="lg:col-span-5 relative hidden lg:block overflow-hidden bg-charcoal/90">
            <img 
              src={workshop} 
              alt="Formline Campbellfield Workshop" 
              className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity scale-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 to-transparent mix-blend-overlay" />
            <div className="absolute bottom-12 left-12 right-12 z-10 space-y-4">
              <span className="text-[0.62rem] text-terracotta tracking-widest font-bold uppercase block">
                Campbellfield Facility
              </span>
              <h4 className="text-display text-2xl text-offwhite leading-tight max-w-sm">
                Obsessive detailing, made local.
              </h4>
              <p className="text-offwhite/50 text-xs leading-relaxed max-w-xs">
                Visit our showroom and assembly warehouse to inspect materials, hinges, veneer grains, and natural stone edge profiles in person.
              </p>
            </div>
            
            {/* Structural bounds */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-offwhite/20 m-8" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-offwhite/20 m-8" />
          </div>

          {/* Right Column — Action Board */}
          <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-12 lg:p-20 relative">
            <div className="absolute inset-0 pointer-events-none select-none">
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-terracotta/[0.03] blur-[100px]" />
            </div>

            <div className="relative z-10 space-y-8 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Construct Your Dream</span>
              </div>

              <h2 className="text-display text-4xl sm:text-5xl md:text-7xl leading-[0.9] tracking-tight text-offwhite">
                Have a project <br />
                in mind?
              </h2>

              <p className="text-offwhite/60 text-sm md:text-base leading-relaxed max-w-lg">
                Whether you have completed architectural blueprints or just a list of raw ideas, our team will help you budget, engineer, and fabricate your vision.
              </p>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link 
                  to="/contact" 
                  className="bg-[#6C7454] hover:bg-[#5b6346] text-offwhite px-8 py-4.5 transition-all duration-300 font-semibold text-sm flex items-center justify-center gap-2 rounded-none hover:gap-3"
                >
                  <span>Request Custom Quote</span>
                  <span className="text-xs">→</span>
                </Link>
                <Link 
                  to="/contact" 
                  className="border border-offwhite/20 hover:border-offwhite/60 hover:bg-offwhite/5 text-offwhite px-8 py-4.5 transition-all duration-300 font-semibold text-sm rounded-none"
                >
                  Book Workshop Tour
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
