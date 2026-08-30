import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/faqs")({
  component: FAQs,
  head: () => ({
    meta: [
      { title: "FAQs | Formline Joinery" },
      { name: "description", content: "Common questions about custom kitchens, timeframes, pricing, and our manufacturing process at Formline Joinery Melbourne." },
      { property: "og:title", content: "FAQs | Formline Joinery" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
  }),
});

const faqData = [
  {
    q: "How long does a custom kitchen or joinery project take?",
    a: "Every project is different, but most custom kitchens take around 6–10 weeks from design sign-off to installation, depending on size, finishes and complexity. Larger commercial and fitout projects vary based on scope. We’ll give you a clear timeline before we begin, so you always know what to expect.",
  },
  {
    q: "How much does a custom kitchen cost?",
    a: "Because everything we make is custom, pricing depends on the size of your space, the materials you choose and the complexity of the design. We provide a detailed, transparent quote after an initial consultation — no surprises, no hidden costs. The best way to get an accurate figure is to get in touch for a free measure and quote.",
  },
  {
    q: "Do you design as well as manufacture and install?",
    a: "Yes. Formline is a full-service joinery business — we handle design, manufacturing and installation in-house. That means one team is accountable from your first sketch to the final install, and nothing gets lost between suppliers.",
  },
  {
    q: "Where are you based and which areas do you service?",
    a: "Our workshop is at 37 Adrian Road, Campbellfield, and we manufacture and install for clients right across Melbourne — both residential and commercial. If you’re in the greater Melbourne area, we’d love to help with your project.",
  },
  {
    q: "What materials and brands do you work with?",
    a: "We build with premium, trusted materials and work with leading Australian suppliers including Polytec, Laminex and Caesarstone. We’ll help you choose finishes that suit your style, your budget and how the space will be used.",
  },
  {
    q: "Do you take on both residential and commercial projects?",
    a: "We do. Alongside custom kitchens and home joinery, we deliver shop fitouts and large-scale commercial projects for businesses, builders and developers. Whatever the scale, you get the same precision and finish Formline is known for.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-offwhite text-charcoal min-h-screen flex flex-col justify-between">
      <Header variant="solid" />

      {/* Hero Section */}
      <section className="pt-40 md:pt-56 pb-16 bg-cream">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest">Questions & Answers</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-display text-[2.6rem] sm:text-6xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tight break-words hyphens-auto">
              Your questions,{" "}
              <br />
              <span className="text-brass">
                answered
              </span>
              .
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 md:py-36 bg-offwhite flex-grow">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column — Sticky Guide Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <Reveal>
                <div className="bg-cream border border-charcoal/10 p-8 md:p-10 relative overflow-hidden">
                  {/* Subtle Background Mark */}
                  <div className="absolute -bottom-10 -right-10 text-display text-[10rem] leading-none text-charcoal/[0.02] select-none pointer-events-none">
                    ?
                  </div>
                  
                  <h2 className="text-display text-2xl md:text-3xl mb-4 leading-tight">
                    Still have questions?
                  </h2>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-8">
                    If you can't find the answers you need here, please reach out to our Campbellfield workshop. We are happy to discuss your specific cabinetry requirements.
                  </p>
                  
                  <div className="space-y-6 mb-8 border-t border-charcoal/10 pt-6">
                    <div>
                      <div className="text-eyebrow text-charcoal/40 text-[0.62rem] mb-1">Workshop Address</div>
                      <div className="text-sm font-medium">37 Adrian Road, Campbellfield VIC</div>
                    </div>
                    <div>
                      <div className="text-eyebrow text-charcoal/40 text-[0.62rem] mb-1">Direct Enquiries</div>
                      <div className="text-sm font-medium break-all">admin@formlinejoinery.com.au</div>
                    </div>
                  </div>

                  <Link to="/contact" className="magnetic-btn w-full justify-center py-4 rounded-none">
                    <span>Ask a Question</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column — Accordion List */}
            <div className="lg:col-span-8">
              <div className="border-t border-charcoal/10">
                {faqData.map((f, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <Reveal key={f.q} delay={i * 0.05}>
                      <div className="border-b border-charcoal/10">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          className="w-full py-7 md:py-9 flex items-start justify-between gap-6 text-left group"
                          aria-expanded={isOpen}
                        >
                          <div className="flex gap-4 md:gap-6 items-start">
                            {/* Number index */}
                            <span className={`text-display text-base md:text-lg transition-colors duration-300 ${
                              isOpen ? "text-terracotta" : "text-charcoal/40"
                            }`}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            
                            <h3 className={`text-display text-lg md:text-xl lg:text-2xl transition-colors duration-300 leading-snug max-w-2xl ${
                              isOpen ? "text-terracotta" : "text-charcoal/80 group-hover:text-charcoal"
                            }`}>
                              {f.q}
                            </h3>
                          </div>

                          {/* Elementor SVG Icon toggle */}
                          <div className={`flex-shrink-0 h-10 w-10 border flex items-center justify-center transition-all duration-500 ${
                            isOpen ? "bg-terracotta border-terracotta rotate-45" : "border-charcoal/20 group-hover:border-terracotta/40"
                          }`}>
                            {isOpen ? (
                              <svg
                                className="h-4 w-4 fill-offwhite"
                                viewBox="0 0 19.9 19.9"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M16.1,15.3l0-7c0-0.4-0.3-0.8-0.8-0.8c-0.4,0-0.8,0.3-0.8,0.8l0,5.1L5.1,4.1 c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l9.4,9.4l-5.1,0c-0.4,0-0.8,0.3-0.8,0.8c0,0.4,0.3,0.8,0.8,0.8l7,0 C15.7,16.1,16.1,15.7,16.1,15.3z" />
                              </svg>
                            ) : (
                              <svg
                                className="h-4 w-4 fill-charcoal/60 group-hover:fill-terracotta transition-colors"
                                viewBox="0 0 19.9 19.9"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M18,8.8l-5-5 c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l3.6,3.6H2.4C2,8.6,1.6,8.9,1.6,9.4c0,0.4,0.3,0.8,0.8,0.8h13.2L12,13.8 c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.1,0l5-5C18.3,9.6,18.3,9.1,18,8.8z" />
                              </svg>
                            )}
                          </div>
                        </button>
                        
                        {/* Smooth Height Expand */}
                        <div className={`overflow-hidden transition-all duration-500 ease-out ${
                          isOpen ? "max-h-60 pb-7 md:pb-9" : "max-h-0"
                        }`}>
                          <div className="ps-8 md:ps-12">
                            <p className="text-charcoal/70 text-sm md:text-base leading-relaxed max-w-2xl">
                              {f.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
