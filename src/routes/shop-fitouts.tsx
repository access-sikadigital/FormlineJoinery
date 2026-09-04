import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import detailBrass from "@/assets/detail-brass.jpg";
import projectWalnut from "@/assets/project-walnut.jpg";

export const Route = createFileRoute("/shop-fitouts")({
  component: ShopFitouts,
  head: () => ({
    meta: [
      { title: "Shop & Retail Fitouts Melbourne | Commercial Joinery | Formline" },
      { name: "description", content: "Custom shop & retail fitouts across Melbourne. Durable, brand-defining joinery for retail & hospitality, built to spec. 25 years’ experience. Get a quote." },
      { property: "og:title", content: "Shop & Retail Fitouts Melbourne | Commercial Joinery | Formline" },
      { property: "og:url", content: "/shop-fitouts" },
    ],
    links: [{ rel: "canonical", href: "/shop-fitouts" }],
  }),
});

function ShopFitouts() {
  return (
    <div className="bg-offwhite text-charcoal min-h-screen">
      <Header variant="solid" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-olive text-offwhite overflow-hidden grain-overlay">
        <div className="absolute inset-0 z-0">
          <img src={detailBrass} alt="Shop Fitouts Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-2 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-offwhite" />
              <span className="text-eyebrow text-offwhite font-bold text-xs tracking-widest uppercase">Our Services</span>
            </div>
          </Reveal>
          
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <h1 className="text-display text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tight mb-8">
                  Shop fitouts that bring your brand to{" "}
                  <span className="text-cream">life</span>.
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:pb-6">
              <Reveal delay={0.2}>
                <p className="text-offwhite/70 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                  First impressions matter. Formline Joinery designs and builds custom shop fitouts for retail and hospitality businesses across Melbourne — joinery that reflects your brand, works hard every day and keeps customers coming back.
                </p>
                <p className="text-offwhite/70 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                  From counters and display units to full fitouts, we deliver on spec, on budget and on time.
                </p>
                <Link to="/contact" className="magnetic-btn bg-offwhite text-charcoal px-8 py-4 inline-flex items-center gap-3">
                  <span>Discuss Your Fitout</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Badges */}
      <section className="bg-olive border-t border-white/10 text-offwhite py-8">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Custom design",
              "Made in Melbourne",
              "Commercial-grade materials",
              "On-time delivery"
            ].map((badge, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-2 sm:gap-3 border border-white/10 py-6 px-2 sm:px-4 hover:bg-white/5 transition-colors">
                  <span className="text-offwhite">✦</span>
                  <span className="text-xs uppercase tracking-wider sm:tracking-widest font-bold">{badge}</span>
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
                  Retail and hospitality joinery, built to{" "}
                  <span className="text-brass">perform</span>.
                </h2>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-12 max-w-xl">
                  A great fitout does two jobs at once: it showcases your brand and it stands up to constant use. We combine considered design with commercial-grade manufacturing to create shop fitouts that look sharp and last — from boutique retail to cafés, salons and beyond.
                </p>
              </Reveal>
            </div>

            {/* Image Block */}
            <Reveal>
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-olive relative overflow-hidden border border-charcoal/10 group">
                <img src={projectWalnut} alt="Shop Fitout Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
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
              { title: "Retail Fitouts", desc: "Shelving, counters, display joinery and storage designed to showcase products and guide customers through your space." },
              { title: "Hospitality Fitouts", desc: "Bars, servery counters and cabinetry built to handle the pace of cafés, restaurants and venues." },
              { title: "Custom Commercial Joinery", desc: "Reception desks, feature walls and bespoke fixtures that make your space unmistakably yours." }
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
      <section className="py-24 md:py-36 bg-olive text-offwhite grain-overlay">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 text-center">
          <Reveal>
            <h2 className="text-display text-4xl md:text-6xl leading-tight mb-8">
              One team, from concept to <span className="text-cream">completion</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-offwhite/70 text-lg max-w-2xl mx-auto mb-16">
              We manage your fitout end to end — design, manufacture and install — so there’s one point of accountability and no dropped details. Manufacturing in-house at Campbellfield means we can hit tight timelines and keep quality high, minimising downtime for your business.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="magnetic-btn px-10 py-5 bg-offwhite text-charcoal inline-flex items-center gap-3">
              <span>Plan your shop fitout</span>
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
                Formline understood exactly what our retail space needed. The joinery is stunning, highly functional, and was delivered flawlessly on schedule.
              </p>
              <span className="text-eyebrow text-sm tracking-widest text-charcoal/50 uppercase">— Olivia, Fitzroy</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
