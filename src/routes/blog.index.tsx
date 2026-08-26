import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { blogs } from "../data/blogs";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Journal | Formline Joinery" },
      { name: "description", content: "Articles, insights and updates from Melbourne's custom joinery experts." },
      { property: "og:title", content: "Journal | Formline Joinery" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogIndex() {
  return (
    <div className="bg-offwhite text-charcoal min-h-screen">
      <Header variant="solid" />

      {/* Hero Header */}
      <section className="pt-40 md:pt-56 pb-20 bg-cream">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest uppercase">Journal</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.88] tracking-tight max-w-5xl">
              Insights from the{" "}
              <span className="text-serif-italic normal-case font-normal text-brass tracking-normal">
                workshop
              </span>
              .
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="py-24 md:py-36 bg-offwhite">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full bg-cream border border-charcoal/10 p-8 md:p-10 hover:bg-charcoal hover:text-offwhite transition-colors duration-500 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="h-1.5 w-1.5 bg-terracotta rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-eyebrow text-terracotta text-[0.68rem] tracking-widest uppercase">{p.category}</span>
                    </div>
                    <h3 className="text-display text-2xl md:text-3xl mb-4 group-hover:text-brass transition-colors leading-[1.1] tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-charcoal/70 group-hover:text-offwhite/70 text-sm md:text-base leading-relaxed mb-8 transition-colors">
                      {p.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-eyebrow text-terracotta text-[0.68rem] font-bold tracking-widest uppercase group-hover:gap-3 transition-all pt-4 border-t border-charcoal/10">
                    <span>Read Article</span>
                    <span>→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
