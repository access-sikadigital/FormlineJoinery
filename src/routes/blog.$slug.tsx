import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { blogs } from "../data/blogs";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogs.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: Post,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-offwhite text-charcoal">
      <Header variant="solid" />
      <div className="text-center px-6">
        <div className="text-display text-4xl mb-4">Article Not Found</div>
        <p className="text-charcoal/60 mb-8 max-w-sm">The journal entry you're looking for does not exist or has been moved.</p>
        <Link to="/blog" className="magnetic-btn px-6 py-3 rounded-none">
          <span>Back to Blog</span>
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
      { title: `${loaderData?.title ?? "Article"} — Formline Journal` },
      { name: "description", content: loaderData?.excerpt ?? "" },
      { property: "og:title", content: loaderData?.title ?? "" },
      { property: "og:description", content: loaderData?.excerpt ?? "" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/blog/${params.slug}` },
      ...(loaderData?.cover ? [{ property: "og:image", content: loaderData.cover }] : []),
    ],
    links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
  }),
});

function Post() {
  const p = Route.useLoaderData();
  const currentIndex = blogs.findIndex((post) => post.slug === p.slug);
  const prevPost = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextPost = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  const [comments, setComments] = useState<{ name: string; email: string; text: string; date: string }[]>([]);
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [saveDetails, setSaveDetails] = useState(false);
  const [submittedComment, setSubmittedComment] = useState(false);

  // Reset comment state when switching articles
  useEffect(() => {
    setComments([]);
    setCommentText("");
  }, [p.slug]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName || !commentEmail || !commentText) return;
    
    setComments([
      ...comments,
      {
        name: commentName,
        email: commentEmail,
        text: commentText,
        date: new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" }),
      }
    ]);
    setCommentText("");
    if (!saveDetails) {
      setCommentName("");
      setCommentEmail("");
    }
    setSubmittedComment(true);
    setTimeout(() => setSubmittedComment(false), 4000);
  };

  // Find first paragraph for drop cap styling
  const firstParaIdx = p.content.findIndex((c) => c.type === "p");

  return (
    <div className="bg-offwhite text-charcoal min-h-screen">
      <Header variant="solid" />

      {/* NEXT-LEVEL HERO: Split View Layout */}
      <section className="pt-20 border-b border-charcoal/10 bg-cream">
        <div className="grid lg:grid-cols-12 items-stretch min-h-[70vh]">
          {/* Hero Left Column — Meta & Massive Headline */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-12 lg:p-20 relative">
            <div className="space-y-6">
              <Reveal>
                <div className="flex items-center gap-3 text-xs">
                  <Link to="/blog" className="text-charcoal/50 hover:text-terracotta transition-colors font-medium">
                    Journal
                  </Link>
                  <span className="text-charcoal/20">/</span>
                  <span className="text-terracotta uppercase tracking-wider font-semibold">{p.category}</span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.02] tracking-tight text-charcoal">
                  {p.title}
                </h1>
              </Reveal>
            </div>

            {/* Author row & stats */}
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center justify-between gap-6 pt-12 mt-12 border-t border-charcoal/10">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-charcoal text-offwhite flex items-center justify-center text-display text-lg font-bold">
                    {p.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-charcoal">{p.author}</div>
                    <div className="text-[0.62rem] text-charcoal/40 uppercase tracking-widest">Campbellfield Workshop</div>
                  </div>
                </div>
                <div className="text-eyebrow text-charcoal/50 text-xs">
                  Published {p.date} · {p.read} Read
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero Right Column — Clean Parallax Frame */}
          <div className="lg:col-span-5 relative min-h-[40vh] lg:min-h-0 overflow-hidden bg-charcoal">
            <img 
              src={p.cover} 
              alt={p.title} 
              className="absolute inset-0 h-full w-full object-cover opacity-90 scale-100 transition-transform duration-[8s] ease-out hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-l from-charcoal/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ARTICLE BODY & META MATRIX: Asymmetric Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Sidebar — Reading Notes & Share (Sticky on desktop) */}
            <div className="lg:col-span-3 lg:sticky lg:top-32 space-y-12">
              <Reveal>
                <div className="border-l border-charcoal/10 pl-6 space-y-6">
                  <h3 className="text-eyebrow text-charcoal/40 text-[0.65rem] uppercase tracking-wider">Highlight</h3>
                  <p className="text-charcoal/80 text-sm italic leading-relaxed">
                    "{p.excerpt}"
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="border-l border-charcoal/10 pl-6 space-y-4">
                  <h3 className="text-eyebrow text-charcoal/40 text-[0.65rem] uppercase tracking-wider">Share</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                    <a 
                      href="https://www.instagram.com/axiom_themes/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-charcoal/70 hover:text-terracotta transition-colors"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://www.facebook.com/AxiomThemes" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-charcoal/70 hover:text-terracotta transition-colors"
                    >
                      Facebook
                    </a>
                    <a 
                      href="#" 
                      onClick={(e) => e.preventDefault()}
                      className="font-medium text-charcoal/70 hover:text-terracotta transition-colors"
                    >
                      Twitter
                    </a>
                    <a 
                      href="#" 
                      onClick={(e) => e.preventDefault()}
                      className="font-medium text-charcoal/70 hover:text-terracotta transition-colors"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="border-l border-charcoal/10 pl-6 space-y-2">
                  <h3 className="text-eyebrow text-charcoal/40 text-[0.65rem] uppercase tracking-wider font-semibold">Service Scope</h3>
                  <p className="text-xs text-charcoal/60 leading-relaxed">
                    Planning a custom build in Melbourne? We offer tailored services from manufacturing to install.
                  </p>
                  <Link to="/contact" className="inline-block text-xs font-bold text-terracotta hover:underline pt-2">
                    Start Consultation →
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column — Main Editorial Text Content */}
            <div className="lg:col-span-9 max-w-3xl lg:pl-6">
              <Reveal delay={0.1}>
                <div className="space-y-8 text-charcoal/85 text-base md:text-lg leading-relaxed">
                  {p.content.map((item, idx) => {
                    if (item.type === "p") {
                      // Apply Drop Cap to the very first paragraph in the article
                      if (idx === firstParaIdx && item.text.length > 0) {
                        const firstLetter = item.text.charAt(0);
                        const restOfText = item.text.slice(1);
                        return (
                          <p key={idx} className="first-letter-drop">
                            <span className="float-left text-5xl md:text-6xl font-display font-bold text-terracotta mr-3 mt-1 leading-none">
                              {firstLetter}
                            </span>
                            {restOfText}
                          </p>
                        );
                      }
                      return <p key={idx}>{item.text}</p>;
                    }

                    if (item.type === "h2") {
                      return (
                        <h2 key={idx} className="text-display text-2xl md:text-3xl lg:text-4xl text-charcoal pt-10 pb-2 leading-tight tracking-tight border-b border-charcoal/5">
                          {item.text}
                        </h2>
                      );
                    }

                    if (item.type === "list" && item.items) {
                      return (
                        <div key={idx} className="my-8 space-y-4">
                          {item.items.map((li, liIdx) => {
                            const [title, desc] = li.split(" — ");
                            return (
                              <div key={liIdx} className="bg-cream border border-charcoal/5 p-6 hover:border-terracotta/20 transition-colors">
                                <div className="flex gap-4 items-start">
                                  <span className="text-eyebrow text-terracotta text-xs mt-0.5">0{liIdx + 1}</span>
                                  <div>
                                    <h4 className="text-display text-base md:text-lg text-charcoal font-semibold mb-1">
                                      {title}
                                    </h4>
                                    {desc && (
                                      <p className="text-charcoal/70 text-sm md:text-base leading-relaxed">
                                        {desc}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </Reveal>

              {/* Author Bio Matrix */}
              <Reveal delay={0.2}>
                <div className="mt-16 bg-cream border border-charcoal/15 p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-10 items-start relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-1.5 w-16 bg-terracotta" />
                  <div className="h-16 w-16 rounded-full bg-charcoal text-offwhite flex-shrink-0 flex items-center justify-center text-display text-2xl font-bold">
                    {p.author.charAt(0)}
                  </div>
                  <div className="space-y-3">
                    <span className="text-eyebrow text-terracotta text-[0.6rem] tracking-widest uppercase">About The Writer</span>
                    <h4 className="text-display text-xl text-charcoal leading-none">{p.author}</h4>
                    <p className="text-charcoal/75 text-sm leading-relaxed">
                      Custom cabinetry author and manufacturing specialist at Formline Joinery. Writing insights on materials, pricing strategies, storage configurations and installation standards across Melbourne.
                    </p>
                    <div className="flex gap-4 pt-2 text-[0.68rem] font-bold text-charcoal/50">
                      <a href="https://www.facebook.com/AxiomThemes" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors">Facebook</a>
                      <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-terracotta transition-colors">Twitter</a>
                      <a href="https://www.instagram.com/axiom_themes/" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors">Instagram</a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* NEXT / PREV POST NAVIGATION: Full Visual Split Banners */}
              <Reveal delay={0.25}>
                <div className="grid md:grid-cols-2 gap-6 mt-16 pt-12 border-t border-charcoal/10">
                  {prevPost ? (
                    <Link
                      to="/blog/$slug"
                      params={{ slug: prevPost.slug }}
                      className="group relative block p-8 bg-cream border border-charcoal/10 overflow-hidden hover:border-terracotta/30 transition-all text-left"
                    >
                      <span className="text-eyebrow text-charcoal/40 text-[0.6rem] uppercase tracking-wider mb-2 block">
                        ← Previous Entry
                      </span>
                      <h4 className="text-display text-lg md:text-xl text-charcoal group-hover:text-terracotta transition-colors leading-tight line-clamp-2">
                        {prevPost.title}
                      </h4>
                    </Link>
                  ) : (
                    <div className="hidden md:block" />
                  )}

                  {nextPost ? (
                    <Link
                      to="/blog/$slug"
                      params={{ slug: nextPost.slug }}
                      className="group relative block p-8 bg-cream border border-charcoal/10 overflow-hidden hover:border-terracotta/30 transition-all text-right"
                    >
                      <span className="text-eyebrow text-charcoal/40 text-[0.6rem] uppercase tracking-wider mb-2 block">
                        Next Entry →
                      </span>
                      <h4 className="text-display text-lg md:text-xl text-charcoal group-hover:text-terracotta transition-colors leading-tight line-clamp-2">
                        {nextPost.title}
                      </h4>
                    </Link>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              </Reveal>

              {/* COMMENTS SECTION — Numbered Brief Form Input Design */}
              <Reveal delay={0.3}>
                <div className="mt-24 pt-16 border-t border-charcoal/10 space-y-12">
                  <h3 className="text-display text-2xl md:text-3xl text-charcoal">
                    Discussion ({comments.length})
                  </h3>

                  {/* Comments list display */}
                  {comments.length > 0 && (
                    <div className="space-y-6">
                      {comments.map((c, i) => (
                        <div key={i} className="bg-cream border border-charcoal/5 p-6 md:p-8 space-y-3 relative">
                          <div className="absolute top-0 left-0 w-1 h-full bg-terracotta" />
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-display text-base font-semibold text-charcoal">{c.name}</span>
                            <span className="text-[0.65rem] text-charcoal/40">{c.date}</span>
                          </div>
                          <p className="text-charcoal/70 text-sm md:text-base leading-relaxed pl-1">
                            {c.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Comment Form: Clean Underline Design */}
                  <form onSubmit={handleCommentSubmit} className="space-y-10 pt-6">
                    <div>
                      <h4 className="text-display text-xl text-charcoal">Leave a comment</h4>
                      <p className="text-charcoal/50 text-xs">Join the workshop discussion below. Your email address will not be published.</p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2">
                      {/* Name */}
                      <div className="group relative border-b border-charcoal/20 focus-within:border-terracotta transition-all py-2.5">
                        <span className="absolute top-0 right-0 text-[0.55rem] text-charcoal/30 tracking-widest uppercase">01</span>
                        <input
                          type="text"
                          required
                          value={commentName}
                          onChange={(e) => setCommentName(e.target.value)}
                          placeholder="Your Name *"
                          className="w-full bg-transparent outline-none placeholder:text-charcoal/40 text-sm font-medium"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="group relative border-b border-charcoal/20 focus-within:border-terracotta transition-all py-2.5">
                        <span className="absolute top-0 right-0 text-[0.55rem] text-charcoal/30 tracking-widest uppercase">02</span>
                        <input
                          type="email"
                          required
                          value={commentEmail}
                          onChange={(e) => setCommentEmail(e.target.value)}
                          placeholder="Your E-mail Address *"
                          className="w-full bg-transparent outline-none placeholder:text-charcoal/40 text-sm font-medium"
                        />
                      </div>
                    </div>

                    {/* Comment text */}
                    <div className="group relative border-b border-charcoal/20 focus-within:border-terracotta transition-all py-2.5">
                      <span className="absolute top-0 right-0 text-[0.55rem] text-charcoal/30 tracking-widest uppercase">03</span>
                      <textarea
                        rows={4}
                        required
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Your comment *"
                        className="w-full bg-transparent outline-none placeholder:text-charcoal/40 text-sm font-medium resize-none"
                      />
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <input
                          id="saveDetails"
                          type="checkbox"
                          checked={saveDetails}
                          onChange={(e) => setSaveDetails(e.target.checked)}
                          className="mt-0.5 h-4 w-4 border-charcoal/30 accent-terracotta rounded-none cursor-pointer"
                        />
                        <label htmlFor="saveDetails" className="text-xs text-charcoal/60 leading-relaxed cursor-pointer select-none">
                          Save my name, email, and website in this browser for the next time I comment.
                        </label>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          id="consentComment"
                          type="checkbox"
                          required
                          className="mt-0.5 h-4 w-4 border-charcoal/30 accent-terracotta rounded-none cursor-pointer"
                        />
                        <label htmlFor="consentComment" className="text-xs text-charcoal/60 leading-relaxed cursor-pointer select-none">
                          I agree that my submitted data is being collected and stored.
                        </label>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="bg-[#6C7454] hover:bg-[#5b6346] text-offwhite px-8 py-4 flex items-center justify-center gap-2 transition-colors min-w-[160px] font-medium text-sm"
                      >
                        <span>Post Comment</span>
                        <span>→</span>
                      </button>
                    </div>

                    {submittedComment && (
                      <p className="text-terracotta text-xs font-semibold animate-pulse">
                        Comment posted successfully!
                      </p>
                    )}
                  </form>
                </div>
              </Reveal>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
