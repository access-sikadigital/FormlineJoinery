import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/projects";

import heroKitchen from "@/assets/hero-kitchen.jpg";
import craftHands from "@/assets/craft-hands.jpg";
import workshop from "@/assets/workshop.jpg";
import materials from "@/assets/materials.jpg";
import detailBrass from "@/assets/detail-brass.jpg";
import projectOlive from "@/assets/project-olive.jpg";
import projectWalnut from "@/assets/project-walnut.jpg";
import projectWardrobe from "@/assets/project-wardrobe.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Formline Joinery | Melbourne Custom Kitchens & Joinery" },
      {
        name: "description",
        content:
          "Bespoke custom kitchens, cabinetry, commercial joinery and shop fitouts. 25 years of craftsmanship, made in Melbourne.",
      },
      { property: "og:title", content: "Formline Joinery | Melbourne Custom Kitchens & Joinery" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <div className="bg-offwhite text-charcoal">
      <Header variant="overlay" />
      <Hero />
      <Statement />
      <Services />
      <Story />
      <Process />
      <Materials />
      <Featured />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-olive text-offwhite grain-overlay flex flex-col justify-between pt-28 pb-12 md:pt-36 md:pb-16">
      {/* Background Video & Parallax Overlay */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={heroKitchen}
          className="h-full w-full object-cover brightness-[0.7] contrast-[1.08] animate-slow-zoom"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-man-working-on-a-piece-of-wood-in-his-workshop-5431/1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-carpenter-sanding-a-piece-of-wood-41561-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-in-a-luxury-apartment-41551-large.mp4"
            type="video/mp4"
          />
          <img
            src={heroKitchen}
            alt="Warm walnut kitchen with brushed brass and travertine, Melbourne"
            className="h-full w-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/40" />
      </motion.div>

      {/* Top Meta Bar */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 bg-offwhite animate-pulse" />
          <span className="text-eyebrow text-offwhite/80">Est. 1999 · Melbourne, Australia</span>
        </div>

        <div className="hidden md:flex items-center gap-3 text-right">
          <span className="text-eyebrow text-offwhite/50">Featured Residence</span>
          <span className="text-eyebrow text-offwhite">01 / 09</span>
          <span className="text-eyebrow text-offwhite/80">· Hawthorn Kitchen</span>
        </div>
      </div>

      {/* Main Content Area */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 my-auto py-8"
      >
        <div className="max-w-6xl">
          <h1 className="text-display text-3xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92]">
            <span className="block reveal-mask">
              <span>Where craftsmanship</span>
            </span>
            <span className="block reveal-mask" style={{ animationDelay: "100ms" }}>
              <span className="text-cream mr-3">
                meets
              </span>
              <span>refinement.</span>
            </span>
          </h1>

          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 border-t border-offwhite/15">
            <div className="lg:col-span-7 border-l-2 border-offwhite/40 pl-6 py-1">
              <p
                className="text-offwhite/90 text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide animate-fade-up"
                style={{ animationDelay: "400ms" }}
              >
                For 25 years, Formline Joinery has designed and manufactured custom kitchens, cabinetry and commercial fitouts for homes and businesses across Melbourne. Every piece is built in our Campbellfield workshop with precision, premium materials and a level of detail you can see and feel.<br /><br />
                From bespoke family kitchens to full commercial fit outs, we turn considered design into joinery built to last a lifetime.
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-wrap items-center gap-4  animate-fade-up" style={{ animationDelay: "600ms" }}>
              <Link
                to="/contact"
                className="magnetic-btn px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase rounded-none bg-offwhite text-charcoal"
              >
                <span>Get a Free Quote</span>
                <span className="btn-arrow text-base">→</span>
              </Link>
              <Link
                to="/portfolio"
                className="btn-outline px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase rounded-none"
              >
                <span>Explore Work</span>
                <span className="btn-arrow text-base">→</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Scroll Hint */}
      <div className="relative z-10 mx-auto flex flex-col items-center gap-2 text-offwhite/60">
        <span className="text-eyebrow text-[0.65rem] tracking-widest uppercase">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-offwhite to-transparent animate-pulse" />
      </div>
    </section>
  );
}

/* ---------------- STATEMENT ---------------- */
function Statement() {
  return (
    <section className="bg-offwhite py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal delay={0.15}>
          <h2 className="text-display text-[11vw] sm:text-[7vw] md:text-[6.5vw] lg:text-[6.5rem] leading-[0.88] max-w-[18ch]">
            Twenty-five years of craft.{" "}
            <span className="text-stone">
              Made in Melbourne.
            </span>{" "}
            Built to last a lifetime.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["20%", "100%"]);

  const items = [
    {
      n: "01",
      title: "Custom Kitchens",
      subtitle: "Bespoke kitchens designed around how you live",
      desc: "Bespoke kitchens designed around how you live and cook, then manufactured to millimetre precision in our Melbourne workshop.",
      img: projectWalnut,
      tag: "Residential",
      link: "/custom-kitchens"
    },
    {
      n: "02",
      title: "Custom Cabinetry & Joinery",
      subtitle: "Wardrobes, vanities and storage",
      desc: "Wardrobes, vanities, storage and feature joinery — made to measure for every room in your home.",
      img: projectWardrobe,
      tag: "Custom Interiors",
      link: "/custom-cabinetry-joinery"
    },
    {
      n: "03",
      title: "Shop Fitouts",
      subtitle: "Retail and hospitality fitouts",
      desc: "Retail and hospitality fitouts that bring your brand to life and stand up to daily use.",
      img: detailBrass,
      tag: "Fitouts & Retail",
      link: "/shop-fitouts"
    },
    {
      n: "04",
      title: "Commercial Projects",
      subtitle: "Large-scale joinery and cabinetry",
      desc: "Large-scale joinery and cabinetry for offices, developments and commercial spaces, delivered on time and on spec.",
      img: heroKitchen,
      tag: "Commercial & Hospitality",
      link: "/commercial-projects"
    },
  ];

  return (
    <section ref={targetRef} className="relative max-md:h-auto h-[220vh] bg-olive text-offwhite grain-overlay">
      <div className="max-md:relative max-md:h-auto sticky top-0 flex h-screen flex-col justify-between max-md:gap-10 overflow-hidden py-10 md:py-10">
        {/* Section Header */}
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 flex items-end justify-between gap-6 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-offwhite" />
              <span className="text-eyebrow text-offwhite font-bold text-xs tracking-widest">What We Do</span>
            </div>
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Custom-made, start to finish.
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <span className="text-eyebrow text-offwhite/50 text-[0.7rem]">Scroll to Explore</span>
            <div className="h-1.5 w-28 bg-offwhite/10 relative overflow-hidden">
              <motion.div style={{ width: progressWidth }} className="h-full bg-offwhite" />
            </div>
          </div>
        </div>

        {/* Horizontal Card Slider Track */}
        <div className="relative w-full overflow-hidden my-auto py-8 md:py-2">
          <motion.div style={{ x }} className="flex max-md:flex-col gap-6 md:gap-8 px-6 md:px-10 max-md:w-full w-max max-md:!transform-none">
            {items.map((s) => (
              <div
                key={s.n}
                className="group relative w-full md:w-[500px] lg:w-[540px] shrink-0 bg-charcoal/50 border border-offwhite/12 hover:border-offwhite/70 transition-colors duration-500 overflow-hidden flex flex-col justify-between p-5 md:p-6"
              >
                {/* Top Card Info & Badge */}
                <div className="flex items-center justify-between gap-3 mb-4 z-10">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-display text-lg sm:text-xl text-offwhite font-bold leading-none shrink-0">{s.n}</span>
                    <span className="h-3 w-px bg-offwhite/20 shrink-0" />
                    <span className="text-eyebrow text-offwhite/60 text-[0.65rem] truncate">{s.tag}</span>
                  </div>
                  <span className="hidden sm:block text-eyebrow text-offwhite/40 text-[0.65rem] group-hover:text-offwhite transition-colors shrink-0 whitespace-nowrap">
                    Formline Joinery
                  </span>
                </div>

                {/* Card Image Wrapper with Hover Zoom */}
                <Link to={s.link} className="block relative overflow-hidden aspect-[16/9] max-h-[220px] md:max-h-[250px] mb-4 border border-offwhite/5">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Hover Badge */}
                  <div className="absolute bottom-3 right-3 bg-charcoal/85 backdrop-blur-md border border-offwhite/20 px-3 py-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-eyebrow text-offwhite text-[0.65rem] flex items-center gap-1.5">
                      View Service <span className="text-offwhite">→</span>
                    </span>
                  </div>
                </Link>

                {/* Bottom Title & Description */}
                <div>
                  <div className="text-eyebrow text-offwhite text-[0.65rem] mb-1.5">{s.subtitle}</div>
                  <h3 className="text-display text-xl md:text-2xl lg:text-3xl mb-2 group-hover:text-offwhite transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-offwhite/75 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {s.desc}
                  </p>

                  <Link
                    to={s.link}
                    className="btn-outline px-5 py-2.5 text-[0.7rem] tracking-[0.16em] w-full sm:w-auto text-center rounded-none"
                  >
                    <span>Discover {s.title}</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* Card 05: Explore All Services */}
            <div className="group relative w-full md:w-[500px] lg:w-[540px] shrink-0 bg-charcoal border border-offwhite/25 hover:border-offwhite/50 transition-colors duration-500 overflow-hidden flex flex-col justify-between p-5 md:p-6 text-offwhite">
              {/* Top Card Info & Badge */}
              <div className="flex items-center justify-between gap-3 mb-4 z-10">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-display text-lg sm:text-xl font-bold leading-none shrink-0">05</span>
                  <span className="h-3 w-px bg-offwhite/40 shrink-0" />
                  <span className="text-eyebrow text-offwhite/90 text-[0.65rem] truncate">All Disciplines</span>
                </div>
                <span className="hidden sm:block text-eyebrow text-offwhite/70 text-[0.65rem] shrink-0 whitespace-nowrap">
                  Formline Workshop
                </span>
              </div>

              {/* Card Image Wrapper with Hover Zoom */}
              <Link to="/services" className="block relative overflow-hidden aspect-[16/9] max-h-[220px] md:max-h-[250px] mb-4 border border-offwhite/20">
                <img
                  src={workshop}
                  alt="Explore All Formline Services"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors" />

                {/* Center Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-display text-lg sm:text-xl text-offwhite tracking-wider flex items-center gap-3 border border-offwhite/40 backdrop-blur-md px-6 py-3 bg-charcoal/40 group-hover:border-offwhite transition">
                    All Services <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                  </span>
                </div>
              </Link>

              {/* Bottom Title & Description */}
              <div>
                <div className="text-eyebrow text-offwhite/80 text-[0.65rem] mb-1.5">Full Joinery Capabilities</div>
                <h3 className="text-display text-xl md:text-2xl lg:text-3xl mb-2 text-offwhite">
                  Explore All Services
                </h3>
                <p className="text-offwhite/90 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  Discover our complete suite of custom kitchens, architectural joinery, commercial fitouts & detailed cabinetry.
                </p>

                <Link
                  to="/portfolio"
                  className="btn-outline px-5 py-2.5 text-[0.7rem] tracking-[0.16em] w-full sm:w-auto text-center rounded-none border-offwhite text-offwhite hover:bg-offwhite hover:text-charcoal transition-all"
                >
                  <span>View All Projects</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status / Footer */}
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 flex items-center justify-between text-offwhite/50 text-eyebrow text-[0.65rem]">
          <span>Formline Joinery · Architectural Workshop Melbourne</span>
          <span>01 — 05</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORY / NUMBERS ---------------- */
function Story() {
  const stats = [
    { n: "25+", label: "Years of Practice", sub: "Est. 1999" },
    { n: "500+", label: "Projects Delivered", sub: "Melbourne-wide" },
    { n: "100%", label: "Made In-House", sub: "Zero Subcontractors" },
    { n: "12", label: "Master Craftspeople", sub: "On Workshop Floor" },
  ];

  const cards = [
    {
      num: "01",
      title: "Hand Joinery & Sanding",
      desc: "Every joint hand-fitted by senior cabinetmakers.",
      img: craftHands,
    },
    {
      num: "02",
      title: "Sustainable Hardwoods",
      desc: "Responsibly sourced Australian timbers & veneers.",
      img: materials,
    },
    {
      num: "03",
      title: "Campbellfield Mill Floor",
      desc: "Precision machining under one workshop roof.",
      img: workshop,
    },
  ];

  return (
    <section className="bg-offwhite text-charcoal py-20 md:py-32 relative overflow-hidden border-t border-b border-charcoal/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-charcoal/15">
          <Reveal>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">The Workshop</span>
              </div>
              <h2 className="text-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] max-w-[16ch]">
                25 years of{" "}
                <span className="text-brass">
                  Melbourne
                </span>{" "}
                craftsmanship.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="max-w-md">
            <p className="text-charcoal/75 leading-relaxed text-sm md:text-base mb-6">
              Formline Joinery has been crafting custom kitchens and joinery for a quarter of a century. In that time we’ve built our reputation the hard way — through referrals, repeat clients and work that speaks for itself.
              <br/><br/>
              Everything is made in-house at our Campbellfield facility, so we control quality from the first drawing to the final install. No outsourcing, no shortcuts — just beautifully made joinery, delivered right across Melbourne.
            </p>
            <Link
              to="/about"
              className="magnetic-btn px-7 py-3.5 text-xs tracking-[0.18em] uppercase rounded-none inline-flex items-center gap-3"
            >
              <span>About Us</span>
              <span className="btn-arrow">→</span>
            </Link>
          </Reveal>
        </div>

        {/* 3-Card Editorial Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {cards.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.1}>
              <div className="group relative bg-cream border border-charcoal/15 hover:border-terracotta hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between p-5 md:p-6 h-full">
                <div className="flex items-center justify-between mb-4 z-10">
                  <span className="text-display text-lg text-terracotta font-bold">{c.num}</span>
                  <span className="text-eyebrow text-charcoal/50 text-[0.65rem] uppercase tracking-wider">
                    Formline Workshop
                  </span>
                </div>

                <div className="relative overflow-hidden aspect-[4/3] mb-5 border border-charcoal/10">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div>
                  <h3 className="text-display text-xl md:text-2xl mb-1.5 text-charcoal group-hover:text-terracotta transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-charcoal/70 text-xs md:text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Full-Width Horizontal Metric Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-charcoal/15 bg-charcoal/15 gap-px shadow-sm">
          {stats.map((s, i) => (
            <Reveal key={s.n} delay={0.25 + i * 0.05} className="bg-cream/70 h-full">
              <div className="h-full p-6 md:p-8 hover:bg-cream transition-colors duration-300">
                <div className="text-display text-4xl md:text-5xl text-terracotta mb-2 font-bold">
                  {s.n}
                </div>
                <div className="text-eyebrow text-charcoal text-[0.65rem] sm:text-xs font-semibold mb-1 break-words hyphens-auto">
                  {s.label}
                </div>
                <div className="text-eyebrow text-charcoal/50 text-[0.6rem] sm:text-[0.68rem] break-words hyphens-auto">
                  {s.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    {
      n: "01",
      title: "Discover",
      desc: "We visit your site, listen carefully, and understand how you actually live — your morning rituals, how light moves through the room, what you reach for first.",
      accent: "Site Visit & Brief",
      img: craftHands,
    },
    {
      n: "02",
      title: "Design",
      desc: "Detailed drawings, materials board, joinery elevations — no ambiguity. You see every handle, hinge and finish before we cut a single board.",
      accent: "Drawings & Materials",
      img: materials,
    },
    {
      n: "03",
      title: "Manufacture",
      desc: "Milled and finished in our Campbellfield workshop under one roof. Every joint is hand-fitted by the same cabinetmaker who drew it.",
      accent: "Campbellfield Workshop",
      img: workshop,
    },
    {
      n: "04",
      title: "Install",
      desc: "Our own team installs on site, cleans up, and stays until it's right. We don't leave until you're satisfied.",
      accent: "On-Site Completion",
      img: detailBrass,
    },
  ];

  return (
    <section className="bg-olive text-offwhite py-20 md:py-32 grain-overlay relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 md:mb-28">
          <Reveal>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-offwhite" />
                <span className="text-eyebrow text-offwhite font-bold text-xs tracking-widest">Process</span>
              </div>
              <h2 className="text-display text-5xl md:text-7xl lg:text-8xl leading-[0.88]">
                A slow craft,{" "}
                <span className="text-cream">
                  four unhurried steps
                </span>
                .
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex items-end">
            <p className="text-offwhite/60 leading-relaxed max-w-md lg:ml-auto text-sm md:text-base">
              From the first site visit to the final door close, every Formline project follows the same deliberate, transparent process — refined over twenty-five years.
            </p>
          </Reveal>
        </div>

        {/* Immersive Step Cards */}
        <div className="relative">
          {/* Central Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-offwhite/10 -translate-x-1/2" />

          <div className="flex flex-col gap-16 lg:gap-0">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${i > 0 ? "lg:mt-[-2rem]" : ""}`}>
                    {/* Timeline Node */}
                    <div className="hidden lg:flex absolute left-1/2 top-12 -translate-x-1/2 z-20 items-center justify-center">
                      <div className="h-12 w-12 border-2 border-offwhite/40 bg-olive flex items-center justify-center">
                        <span className="text-display text-sm text-offwhite">{s.n}</span>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`${isEven ? "lg:order-1" : "lg:order-2"} mb-6 lg:mb-0 ${isEven ? "lg:pr-16" : "lg:pl-16"}`}>
                      <div className="group relative overflow-hidden aspect-[16/10] bg-charcoal/50 border border-offwhite/10">
                        <img
                          src={s.img}
                          alt={s.title}
                          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20 group-hover:from-charcoal/30 transition-all duration-700" />
                        
                        {/* Floating Step Label */}
                        <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm border border-offwhite/15 px-3 py-1.5 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-offwhite rounded-full" />
                          <span className="text-eyebrow text-offwhite/80 text-[0.62rem]">{s.accent}</span>
                        </div>

                        {/* Large Step Number Watermark */}
                        <div className="absolute bottom-4 right-6 text-display text-[6rem] md:text-[8rem] leading-none text-offwhite/[0.04] select-none pointer-events-none">
                          {s.n}
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`${isEven ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16 lg:text-right"} flex flex-col justify-center`}>
                      {/* Mobile Step Number */}
                      <div className="lg:hidden flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 border-2 border-offwhite/40 flex items-center justify-center">
                          <span className="text-display text-sm text-offwhite">{s.n}</span>
                        </div>
                        <span className="h-px flex-1 bg-offwhite/15" />
                      </div>

                      <h3 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-[0.95]">
                        {s.title}
                      </h3>
                      <p className="text-offwhite/65 leading-relaxed text-sm md:text-base max-w-md mb-6">
                        {s.desc}
                      </p>
                      <div className={`flex items-center gap-3 ${isEven ? "" : "lg:justify-end"}`}>
                        <span className="h-px w-10 bg-offwhite" />
                        <span className="text-eyebrow text-offwhite text-[0.7rem]">Step {s.n}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <Reveal delay={0.4}>
          <div className="mt-24 pt-10 border-t border-offwhite/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-offwhite/50 text-eyebrow text-[0.7rem] tracking-widest">
              Every project follows the same deliberate rhythm · No shortcuts · No surprises
            </p>
            <Link
              to="/contact"
              className="magnetic-btn bg-offwhite text-charcoal px-7 py-3.5 text-xs tracking-[0.18em] uppercase rounded-none inline-flex items-center gap-3"
            >
              <span>Start Your Project</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- MATERIALS ---------------- */
function Materials() {
  const palette = [
    {
      name: "Polytec",
      detail: "Decorative Boards & Laminates",
      note: "Premium decorative boards and laminates for joinery that demands durability and aesthetic excellence.",
      img: materials,
      logo: "/logos/suppliers/polytec-au.svg",
      tag: "Cabinetry & Surfaces",
    },
    {
      name: "Laminex",
      detail: "Architectural Surfaces",
      note: "High-quality architectural surfaces crafted to stand up to the daily rigours of family and commercial life.",
      img: detailBrass,
      logo: "/logos/suppliers/laminex-au.svg",
      tag: "Panels & Benchtops",
    },
    {
      name: "Caesarstone",
      detail: "Engineered Stone",
      note: "Durable, high-performance engineered quartz and porcelain surfaces for striking benchtops and splashbacks.",
      img: workshop,
      logo: "/logos/suppliers/caesarstone.png",
      tag: "Stone Surfaces",
    },
  ];

  return (
    <section className="bg-cream py-20 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Section Header — Asymmetric Split */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Suppliers</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display text-5xl md:text-7xl lg:text-8xl leading-[0.88]">
                Partners in creating{" "}
                <span className="text-brass">
                  dream kitchens
                </span>
                .
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-charcoal/70 leading-relaxed text-sm md:text-base max-w-md lg:ml-auto">
                We build with materials we trust. Formline works with Australia’s leading suppliers — including Polytec, Laminex and Caesarstone — so every kitchen and cabinet is finished to the highest standard.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Material Cards — Tall Editorial with Reveal Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {palette.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden bg-olive cursor-pointer">
                {/* Tall Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient Overlay — Intensifies on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                  
                  {/* Top Left Supplier Logo */}
                  <div className="absolute top-6 left-6 z-10 opacity-75 group-hover:opacity-100 transition-opacity duration-500">
                    <img src={m.logo} alt={m.name} className="h-7 md:h-9 w-auto" />
                  </div>
                </div>

                {/* Content — Slides Up on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-offwhite flex flex-col">
                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-1.5 w-1.5 bg-offwhite rounded-full" />
                    <span className="text-eyebrow text-offwhite/60 text-[0.62rem]">{m.tag}</span>
                  </div>

                  {/* Material Name */}
                  <h3 className="text-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 leading-[0.95]">
                    {m.name}
                  </h3>

                  {/* Species List */}
                  <div className="text-offwhite/90 text-sm md:text-base font-medium mb-3">
                    {m.detail}
                  </div>

                  {/* Extended Description — Reveals on Hover */}
                  <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 ease-out">
                    <p className="text-offwhite/60 text-xs md:text-sm leading-relaxed pt-2 border-t border-offwhite/15">
                      {m.note}
                    </p>
                  </div>
                </div>

                {/* Corner Index */}
                <div className="absolute top-5 right-5 text-display text-offwhite/10 text-6xl md:text-7xl leading-none select-none pointer-events-none group-hover:text-offwhite/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Texture Detail Strip */}
        <Reveal delay={0.35}>
          <div className="mt-16 border border-charcoal/15 bg-offwhite grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-charcoal/15">
            {[
              { label: "Sourcing", value: "Hand-selected at origin" },
              { label: "Finish", value: "Oil, wax & natural patina" },
              { label: "Guarantee", value: "Lifetime structural warranty" },
            ].map((item) => (
              <div key={item.label} className="px-6 py-5 md:px-8 md:py-6 flex flex-col items-start justify-center gap-1 sm:gap-2">
                <span className="text-eyebrow text-charcoal/50 text-[0.68rem]">{item.label}</span>
                <span className="text-display text-charcoal text-sm md:text-base break-words hyphens-auto">{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FEATURED PROJECTS — Stacking Scroll Cards ---------------- */
function FeaturedCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);

  return (
    <div
      ref={cardRef}
      className="max-md:h-auto max-md:relative h-screen sticky top-0 flex items-center justify-center px-4 md:px-8 max-md:py-4"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full max-w-[1500px] mx-auto max-md:!transform-none max-md:!opacity-100"
      >
        <Link
          to="/portfolio/$slug"
          params={{ slug: project.slug }}
          className="group block relative overflow-hidden bg-olive border border-offwhite/10 md:shadow-2xl"
        >
          {/* Full-Width Cover Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              src={project.cover}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />

            {/* Top-Left Index Badge */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-3">
              <div className="h-10 w-10 md:h-12 md:w-12 border-2 border-terracotta flex items-center justify-center bg-charcoal/60 backdrop-blur-sm">
                <span className="text-display text-sm md:text-base text-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="h-px w-8 bg-offwhite/30" />
                <span className="text-eyebrow text-offwhite/60 text-[0.65rem] uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Top-Right Progress */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 text-eyebrow text-offwhite/40 text-[0.65rem]">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          </div>

          {/* Content — static block on mobile, overlay on desktop */}
          <div className="md:absolute md:inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14">
            <div className="max-w-3xl">
              <h3 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-offwhite mb-3 leading-[0.95] group-hover:text-terracotta transition-colors duration-500">
                {project.title}
              </h3>
              <p className="text-offwhite/70 text-sm md:text-base leading-relaxed mb-5 max-w-xl line-clamp-2">
                {project.intro}
              </p>
              <div className="flex items-center gap-x-6 gap-y-2 flex-wrap">
                <span className="text-eyebrow text-offwhite/50 text-[0.68rem]">
                  {project.location} · {project.year}
                </span>
                <span className="flex items-center gap-2 text-eyebrow text-terracotta text-[0.7rem] group-hover:gap-3 transition-all">
                  <span className="h-px w-6 bg-terracotta" />
                  View Project
                </span>
              </div>
            </div>
          </div>

          {/* Large Ghost Number Watermark — desktop only */}
          <div className="hidden md:block absolute top-1/2 right-8 md:right-14 -translate-y-1/2 text-display text-[10rem] md:text-[16rem] lg:text-[20rem] leading-none text-offwhite/[0.03] select-none pointer-events-none">
            {String(index + 1).padStart(2, "0")}
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

function Featured() {
  const items = projects.slice(0, 3);

  return (
    <section className="bg-offwhite relative">
      {/* Section Header — scrolls away before cards stack */}
      <div className="bg-offwhite pt-20 md:pt-28 pb-10 md:pb-14 border-b border-charcoal/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-end justify-between flex-wrap gap-8">
          <Reveal>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Recent Work</span>
              </div>
              <h2 className="text-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.88] break-words">
                Recent{" "}
                <span className="text-brass">
                  projects
                </span>{" "}
                across Melbourne.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/portfolio"
              className="magnetic-btn px-8 py-4 rounded-none"
            >
              <span>View All Projects</span>
              <span className="btn-arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <div className="max-md:mb-10 md:mb-[30vh] flex flex-col gap-6 md:block">
        {items.map((p, i) => (
          <FeaturedCard
            key={p.slug}
            project={p}
            index={i}
            total={items.length}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS — Immersive Carousel ---------------- */
function Testimonials() {
  const quotes = [
    {
      quote:
        "Formline is the rare joiner whose site finish looks better than the drawings. They obsess over the millimetre.",
      name: "Studio Kin",
      role: "Interior Architects",
      initials: "SK",
    },
    {
      quote:
        "Ten weeks, on program, on budget, immaculate. We now specify them by default.",
      name: "M. Kavanagh",
      role: "Kavanagh Homes",
      initials: "MK",
    },
    {
      quote:
        "They took our brief, gave us something better, and it still feels new five years on.",
      name: "The Chen Residence",
      role: "Toorak",
      initials: "CR",
    },
  ];

  const [active, setActive] = useState(0);
  const next = () => setActive((p) => (p + 1) % quotes.length);
  const prev = () => setActive((p) => (p - 1 + quotes.length) % quotes.length);
  const q = quotes[active];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="bg-olive text-offwhite py-20 md:py-32 grain-overlay relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-terracotta/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brass/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Header Row */}
        <div className="flex items-end justify-between flex-wrap gap-8 mb-16 md:mb-24">
          <Reveal>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-offwhite" />
                <span className="text-eyebrow text-offwhite font-bold text-xs tracking-widest">Testimonials</span>
              </div>
              <h2 className="text-display text-4xl md:text-6xl lg:text-7xl leading-[0.88]">
                What our{" "}
                <span className="text-cream">
                  clients
                </span>{" "}
                say.
              </h2>
            </div>
          </Reveal>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-12 w-12 border border-offwhite/20 flex items-center justify-center text-offwhite/60 hover:text-offwhite hover:border-offwhite/40 hover:bg-terracotta/10 transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-12 w-12 border border-offwhite/20 flex items-center justify-center text-offwhite/60 hover:text-offwhite hover:border-offwhite/40 hover:bg-terracotta/10 transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>

        {/* Quote Card */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Large Pull Quote */}
          <div className="lg:col-span-9">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Giant Opening Quote Mark */}
              <div className="text-offwhite text-[8rem] md:text-[10rem] leading-[0.5] font-serif select-none mb-4 -ml-2">"</div>

              <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] md:leading-[1.12] text-offwhite font-light max-w-4xl mb-10">
                {q.quote}
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-5">
                {/* Initials Avatar */}
                <div className="h-14 w-14 bg-terracotta/15 border border-offwhite/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-display text-sm text-offwhite">{q.initials}</span>
                </div>
                <div>
                  <div className="text-display text-base md:text-lg text-offwhite">{q.name}</div>
                  <div className="text-eyebrow text-offwhite/50 text-[0.68rem] mt-1">{q.role}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Progress Sidebar */}
          <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end gap-6">
            {quotes.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-3 transition-all duration-300 ${
                  i === active ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <span className="text-eyebrow text-[0.65rem] hidden lg:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`block h-px transition-all duration-500 ${
                    i === active ? "w-12 bg-offwhite" : "w-6 bg-offwhite/30 group-hover:w-8 group-hover:bg-offwhite/50"
                  }`}
                />
              </button>
            ))}

            {/* Counter */}
            <div className="text-eyebrow text-offwhite/40 text-[0.65rem] mt-2 hidden lg:block">
              {String(active + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Bottom Divider with Trust Badges */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-offwhite/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 flex-wrap">
            {["25+ Years", "200+ Projects", "100% Referral Rate"].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <span className="h-1 w-1 bg-offwhite rounded-full" />
                <span className="text-eyebrow text-offwhite/50 text-[0.65rem]">{stat}</span>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-eyebrow text-offwhite text-[0.7rem] hover:gap-3 transition-all"
          >
            <span className="h-px w-6 bg-offwhite" />
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA — Cinematic Full-Bleed ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0">
        <img
          src={workshop}
          alt="Formline workshop"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="absolute inset-0 grain-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Top Divider */}
        <div className="pt-24 md:pt-32 pb-20 md:pb-28 border-b border-offwhite/10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            {/* Left — Big Headline */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-1.5 w-1.5 bg-offwhite rounded-full" />
                  <span className="text-eyebrow text-offwhite text-[0.68rem]">
                    Start the Conversation
                  </span>
                  <span className="h-px flex-1 max-w-[80px] bg-offwhite/15" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-display text-offwhite text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7.5rem] leading-[0.88] break-words hyphens-auto">
                  Let's build{" "}
                  <br className="hidden md:block" />
                  something{" "}
                  <span className="text-cream">
                    exceptional
                  </span>
                  .
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-offwhite/60 leading-relaxed max-w-lg mt-8 text-sm md:text-base">
                  Whether it's a kitchen, a library wall, or an entire home of bespoke cabinetry — every project begins with a conversation.
                </p>
              </Reveal>
            </div>

            {/* Right — CTAs */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Reveal delay={0.25}>
                <Link
                  to="/contact"
                  className="magnetic-btn w-full px-8 py-5 rounded-none justify-center"
                >
                  <span>Request a Quote</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </Reveal>
              <Reveal delay={0.3}>
                <Link
                  to="/portfolio"
                  className="btn-outline w-full px-8 py-5 text-offwhite border-offwhite/25 hover:border-offwhite rounded-none justify-center"
                >
                  <span>Explore Recent Work</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Bottom Contact Details Strip */}
        <div className="py-12 md:py-14 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {[
            { label: "Visit", value: "37 Adrian Road, Campbellfield 3061", sub: "Mon–Fri  8 am – 5 pm" },
            { label: "Call", value: "0401 869 565", sub: "Direct line to the workshop" },
            { label: "Email", value: "admin@formlinejoinery.com.au", sub: "We respond within 24 hours" },
          ].map((item) => (
            <Reveal key={item.label} delay={0.1}>
              <div className="group">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1 w-1 bg-offwhite rounded-full" />
                  <span className="text-eyebrow text-offwhite/40 text-[0.62rem]">{item.label}</span>
                </div>
                <div className="text-display text-offwhite text-sm md:text-base mb-1 group-hover:text-offwhite transition-colors">
                  {item.value}
                </div>
                <div className="text-offwhite/40 text-xs">{item.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
