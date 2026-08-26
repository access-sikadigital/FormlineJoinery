import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

// Import all high-fidelity image assets for the gallery
import projectOlive from "@/assets/project-olive.jpg";
import projectWalnut from "@/assets/project-walnut.jpg";
import projectWardrobe from "@/assets/project-wardrobe.jpg";
import detailBrass from "@/assets/detail-brass.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import materials from "@/assets/materials.jpg";
import workshop from "@/assets/workshop.jpg";
import craftHands from "@/assets/craft-hands.jpg";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-offwhite text-charcoal">
      <Header variant="solid" />
      <div className="text-center px-6">
        <div className="text-display text-4xl mb-4">Project Not Found</div>
        <p className="text-charcoal/60 mb-8 max-w-sm">The project archive you're looking for does not exist or has been moved.</p>
        <Link to="/portfolio" className="magnetic-btn px-6 py-3 rounded-none">
          <span>Back to Portfolio</span>
        </Link>
      </div>
      <Footer />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-offwhite text-charcoal">
      <Header variant="solid" />
      <div className="text-center px-6">
        <div className="text-display text-4xl mb-4">Something went wrong</div>
        <p className="text-charcoal/60 mb-8 max-w-sm">{error.message}</p>
        <button onClick={reset} className="magnetic-btn px-6 py-3 rounded-none">
          <span>Try Again</span>
        </button>
      </div>
      <Footer />
    </div>
  ),
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Project"} — Formline Joinery` },
      { name: "description", content: loaderData?.intro ?? "Formline project" },
      { property: "og:title", content: `${loaderData?.title ?? "Project"} — Formline` },
      { property: "og:description", content: loaderData?.intro ?? "" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/portfolio/${params.slug}` },
      ...(loaderData?.cover ? [{ property: "og:image", content: loaderData.cover }] : []),
    ],
    links: [{ rel: "canonical", href: `/portfolio/${params.slug}` }],
  }),
});

// Helper function to build a unique 12-image gallery based on project context
const getGallery = (slug: string) => {
  const assets = [
    { src: projectOlive, cap: "Olive timber paneling meet" },
    { src: projectWalnut, cap: "Honed Walnut grain detailing" },
    { src: projectWardrobe, cap: "Integrated wardrobe lighting profiles" },
    { src: detailBrass, cap: "Unlacquered hand-turned solid brass pulls" },
    { src: heroKitchen, cap: "Full culinary kitchen space perspective" },
    { src: materials, cap: "Raw travertine stone & veneer selection" },
    { src: workshop, cap: "Campbellfield factory dry fitting stage" },
    { src: craftHands, cap: "Hand-polishing timber drawer boxes" }
  ];

  // Permute order based on project slug to create unique look per page
  const permuted = [...assets];
  if (slug === "toorak-house") {
    permuted.reverse();
  } else if (slug === "south-yarra-dressing") {
    const first = permuted.shift();
    if (first) permuted.push(first);
  } else if (slug === "fitzroy-cabinet") {
    permuted.sort(() => 0.5 - Math.random());
  }

  // Composes an asymmetrical mosaic wall layout of 12 items
  return [
    { src: permuted[0].src, caption: `${permuted[0].cap} — Structure Overview`, aspect: "aspect-[16/10]", span: "md:col-span-8" },
    { src: permuted[1].src, caption: `${permuted[1].cap} — Micro Detailing`, aspect: "aspect-[3/4]", span: "md:col-span-4" },
    { src: permuted[2].src, caption: `${permuted[2].cap} — Material Board`, aspect: "aspect-[4/3]", span: "md:col-span-4" },
    { src: permuted[3].src, caption: `${permuted[3].cap} — Handcrafting Phase`, aspect: "aspect-[16/10]", span: "md:col-span-8" },
    { src: permuted[4].src, caption: `${permuted[4].cap} — Shadow Gap Alignment`, aspect: "aspect-[16/10]", span: "md:col-span-6" },
    { src: permuted[5].src, caption: `${permuted[5].cap} — Finished Perspective`, aspect: "aspect-[16/10]", span: "md:col-span-6" },
    { src: permuted[6].src, caption: `${permuted[6].cap} — Joint Quality Check`, aspect: "aspect-[3/4]", span: "md:col-span-4" },
    { src: permuted[7].src, caption: `${permuted[7].cap} LED Strip Profiles`, aspect: "aspect-[4/3]", span: "md:col-span-4" },
    { src: permuted[0].src, caption: `${permuted[0].cap} — Honed Slab Backing`, aspect: "aspect-[4/3]", span: "md:col-span-4" },
    { src: permuted[2].src, caption: `${permuted[2].cap} — Internal Organizer Layout`, aspect: "aspect-[16/10]", span: "md:col-span-8" },
    { src: permuted[1].src, caption: `${permuted[1].cap} — Flush Door Alignment`, aspect: "aspect-[3/4]", span: "md:col-span-4" },
    { src: permuted[4].src, caption: `${permuted[4].cap} — Workshop Assembly Inspection`, aspect: "aspect-[16/10]", span: "md:col-span-8" }
  ];
};

function ProjectDetail() {
  const p = Route.useLoaderData();
  const gallery = getGallery(p.slug);
  
  // Find index of active project and resolve the next one dynamically
  const currentIndex = projects.findIndex((x) => x.slug === p.slug);
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Key event listeners for esc and arrow keys navigation inside the lightbox
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft") {
        setLightboxIdx((prev) => (prev !== null ? (prev > 0 ? prev - 1 : gallery.length - 1) : null));
      }
      if (e.key === "ArrowRight") {
        setLightboxIdx((prev) => (prev !== null ? (prev < gallery.length - 1 ? prev + 1 : 0) : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIdx, gallery.length]);

  return (
    <div className="bg-offwhite text-charcoal min-h-screen">
      <Header variant="overlay" />

      {/* 100VH CINEMATIC PARALLAX HERO */}
      <section className="relative h-[95vh] w-full bg-charcoal overflow-hidden flex flex-col justify-end py-16 md:py-24">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={p.cover} 
            alt={p.title} 
            initial={{ scale: 1.05, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient vignette to overlay links */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent z-10" />
        </div>

        <div className="relative z-20 mx-auto w-full max-w-[1600px] px-6 md:px-10 space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <Link to="/portfolio" className="text-eyebrow text-offwhite/50 hover:text-terracotta transition-colors font-bold text-[0.62rem] tracking-widest uppercase">
                ← Archive list
              </Link>
              <span className="text-offwhite/20">/</span>
              <span className="text-eyebrow text-terracotta font-bold text-[0.62rem] tracking-widest uppercase">
                {p.category}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[8.5rem] text-offwhite tracking-tight leading-[0.9] font-black uppercase break-words">
              {p.title}
            </h1>
          </Reveal>

          {/* Quick specs horizontal dock */}
          <Reveal delay={0.15}>
            <div className="pt-8 border-t border-offwhite/10 flex flex-wrap justify-between items-center gap-6 mt-8">
              <div className="flex gap-12 flex-wrap">
                <div>
                  <span className="text-[0.58rem] text-offwhite/40 tracking-widest uppercase font-bold block mb-1">Location</span>
                  <span className="text-display text-sm text-offwhite font-bold">{p.location}</span>
                </div>
                <div>
                  <span className="text-[0.58rem] text-offwhite/40 tracking-widest uppercase font-bold block mb-1">Year Completed</span>
                  <span className="text-display text-sm text-offwhite font-bold">{p.year}</span>
                </div>
                <div>
                  <span className="text-[0.58rem] text-offwhite/40 tracking-widest uppercase font-bold block mb-1">Discipline</span>
                  <span className="text-display text-sm text-offwhite font-bold">{p.category}</span>
                </div>
              </div>
              <div className="hidden md:block h-3 w-3 rounded-full bg-terracotta animate-pulse" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ASYMMETRIC SPECS GRID & INTRO */}
      <section className="py-24 md:py-36 bg-offwhite">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column — Big Editorial Statement */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                  <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">01 / Project Concept</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-charcoal tracking-tight">
                  {p.intro}
                </p>
              </Reveal>
            </div>

            {/* Right Column — Fine Architectural Specs Sheet */}
            <div className="lg:col-span-5 bg-cream border border-charcoal/10 p-8 md:p-10 space-y-10">
              <Reveal delay={0.15}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-charcoal/10 pb-3">
                    <span className="text-eyebrow text-terracotta font-bold text-[0.62rem] tracking-wider">PROJECT SCOPE</span>
                    <span className="text-[0.58rem] text-charcoal/30 tracking-widest uppercase">Fabricated</span>
                  </div>
                  <ul className="space-y-2">
                    {p.scope.map((item, idx) => (
                      <li key={idx} className="text-sm text-charcoal/80 flex items-center justify-between">
                        <span>{item}</span>
                        <span className="h-1 w-1 bg-charcoal/20 rounded-full" />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-charcoal/10 pb-3">
                    <span className="text-eyebrow text-terracotta font-bold text-[0.62rem] tracking-wider">MATERIALS APPLIED</span>
                    <span className="text-[0.58rem] text-charcoal/30 tracking-widest uppercase">Spec Sheet</span>
                  </div>
                  <ul className="space-y-2">
                    {p.materials.map((item, idx) => (
                      <li key={idx} className="text-sm text-charcoal/80 flex items-center justify-between">
                        <span>{item}</span>
                        <span className="h-1 w-1 bg-charcoal/20 rounded-full" />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* REDESIGNED: MUSEUM GALLERY WALL (12 staggered images) */}
      <section className="pb-36 bg-offwhite">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          
          <Reveal>
            <div className="flex items-center gap-2 mb-16">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">02 / Image Gallery</span>
            </div>
          </Reveal>

          {/* Staggered Masonry Wall Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 items-start">
            {gallery.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05} className={`col-span-1 ${img.span}`}>
                <div 
                  onClick={() => setLightboxIdx(i)}
                  className="group block relative cursor-pointer overflow-hidden border border-charcoal/10 shadow-md bg-cream"
                >
                  {/* Photo Wrapper */}
                  <div className={`relative overflow-hidden ${img.aspect}`}>
                    <img 
                      src={img.src} 
                      alt={img.caption} 
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-104"
                      loading="lazy"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/0 transition-colors duration-500" />
                    
                    {/* Expand icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-charcoal/10 backdrop-blur-[2px]">
                      <div className="h-14 w-14 rounded-full bg-offwhite/90 border border-charcoal/10 flex items-center justify-center text-charcoal">
                        <span className="text-xs uppercase tracking-widest font-bold">Zoom</span>
                      </div>
                    </div>
                  </div>

                  {/* Image specs tag under the card */}
                  <div className="p-4 border-t border-charcoal/5 flex items-center justify-between">
                    <span className="text-[0.68rem] text-charcoal/80 leading-none truncate font-medium">
                      {img.caption}
                    </span>
                    <span className="text-[0.58rem] text-charcoal/30 font-bold uppercase tracking-wider pl-4">
                      Fig. 0{i + 1}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE FULL-SCREEN LIGHTBOX */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/98 backdrop-blur-lg flex flex-col justify-between p-4 md:p-6"
          >
            {/* Lightbox Header */}
            <div className="flex justify-between items-center text-offwhite border-b border-offwhite/10 pb-4">
              <div>
                <span className="text-eyebrow text-terracotta font-bold text-[0.62rem] tracking-wider block">
                  {p.title}
                </span>
                <span className="text-[0.65rem] text-offwhite/40 tracking-wider">
                  Figure 0{lightboxIdx + 1} of {gallery.length}
                </span>
              </div>
              <button 
                onClick={() => setLightboxIdx(null)}
                className="text-xs font-bold uppercase tracking-widest text-offwhite/60 hover:text-terracotta border border-offwhite/20 hover:border-terracotta px-4 py-2 transition-all"
              >
                Close (ESC)
              </button>
            </div>

            {/* Lightbox Mid Viewport (Active Photo with Swiping & Arrow fallbacks) */}
            <div className="flex-grow flex items-center justify-between relative px-2 md:px-12">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx(lightboxIdx > 0 ? lightboxIdx - 1 : gallery.length - 1);
                }}
                className="hidden md:flex h-16 w-16 border border-offwhite/10 hover:border-terracotta rounded-none items-center justify-center text-offwhite hover:text-terracotta transition-all text-xl cursor-pointer"
              >
                ←
              </button>
              
              {/* Image Frame Wrapper — resized for mobile to take maximum screen width */}
              <div className="w-full max-h-[52vh] md:max-h-[65vh] relative overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={lightboxIdx}
                    src={gallery[lightboxIdx].src} 
                    alt={gallery[lightboxIdx].caption} 
                    
                    // SWIPING GESTURE SETUP
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={(e, { offset }) => {
                      const swipeThreshold = 60;
                      if (offset.x < -swipeThreshold) {
                        // Swiped Left -> Next Image
                        setLightboxIdx(lightboxIdx < gallery.length - 1 ? lightboxIdx + 1 : 0);
                      } else if (offset.x > swipeThreshold) {
                        // Swiped Right -> Previous Image
                        setLightboxIdx(lightboxIdx > 0 ? lightboxIdx - 1 : gallery.length - 1);
                      }
                    }}

                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="max-h-[50vh] md:max-h-[62vh] w-auto max-w-[95vw] md:max-w-[70vw] object-contain border border-offwhite/15 shadow-2xl cursor-grab active:cursor-grabbing touch-pan-y"
                  />
                </AnimatePresence>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx(lightboxIdx < gallery.length - 1 ? lightboxIdx + 1 : 0);
                }}
                className="hidden md:flex h-16 w-16 border border-offwhite/10 hover:border-terracotta rounded-none items-center justify-center text-offwhite hover:text-terracotta transition-all text-xl cursor-pointer"
              >
                →
              </button>
            </div>

            {/* Lightbox Footer & Thumbnail Strip */}
            <div className="border-t border-offwhite/10 pt-4 space-y-4">
              <p className="text-center text-serif-italic text-xs md:text-xl text-offwhite/90">
                "{gallery[lightboxIdx].caption}"
              </p>
              
              {/* Horizontal sliding thumbnail row (restored on mobile!) */}
              <div className="flex justify-start md:justify-center gap-2 overflow-x-auto py-2 max-w-full md:max-w-2xl mx-auto scrollbar-none px-4">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIdx(i)}
                    className={`h-10 w-14 flex-shrink-0 border transition-all ${
                      i === lightboxIdx 
                        ? "border-terracotta opacity-100 scale-105" 
                        : "border-offwhite/10 opacity-30 hover:opacity-60"
                    }`}
                  >
                    <img src={img.src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEXT PROJECT BANNER — Massive Zoom Marquee */}
      {nextProject && (
        <section className="relative h-[65vh] w-full overflow-hidden bg-charcoal">
          <Link 
            to="/portfolio/$slug" 
            params={{ slug: nextProject.slug }}
            className="group block w-full h-full relative"
          >
            {/* Background zoom image */}
            <img 
              src={nextProject.cover} 
              alt={nextProject.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-35 scale-102 group-hover:scale-105 transition-transform duration-[10s] ease-out mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
            
            {/* Centered content block */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 space-y-4">
              <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest uppercase block">
                Up Next
              </span>
              <h2 className="text-display text-4xl sm:text-6xl md:text-8xl text-offwhite tracking-tight leading-none uppercase max-w-4xl group-hover:text-terracotta transition-colors duration-500 font-black">
                {nextProject.title}
              </h2>
              <span className="text-eyebrow text-offwhite/50 text-[0.62rem] tracking-widest uppercase font-bold block pt-2 border-t border-offwhite/10 mt-4">
                Explore Project →
              </span>
            </div>
          </Link>
        </section>
      )}

      <Footer />
    </div>
  );
}
