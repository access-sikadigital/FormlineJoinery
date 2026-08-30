import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { 
    label: "Our Services", 
    children: [
      { to: "/custom-kitchens", label: "Custom Kitchens" },
      { to: "/custom-cabinetry-joinery", label: "Custom Cabinetry & Joinery" },
      { to: "/shop-fitouts", label: "Shop Fitouts" },
      { to: "/commercial-projects", label: "Commercial Projects" },
    ] 
  },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export function Header({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.removeProperty("overflow");
      lenis?.start();
      setOpenGroup(null);
    }
  }, [open, lenis]);

  const isOverlay = variant === "overlay" && !scrolled;
  const inkLogo = isOverlay ? "/logos/Logo Off-White.svg" : "/logos/Logo Charcoal.svg";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          scrolled
            ? "bg-offwhite/75 backdrop-blur-xl border-b border-charcoal/8 py-3"
            : variant === "overlay"
            ? "bg-transparent py-6"
            : "bg-offwhite py-5 border-b border-charcoal/8"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link to="/" className="block shrink-0" aria-label="Formline Joinery — Home">
            <img
              src={inkLogo}
              alt="Formline Joinery"
              className={`transition-all duration-700 ${scrolled ? "h-4 md:h-5" : "h-5 md:h-6"}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.slice(0, -1).map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="relative group">
                    <span
                      className={`text-eyebrow cursor-pointer transition-colors !text-[16px] !tracking-wider font-semibold ${
                        isOverlay ? "text-offwhite/85 hover:text-offwhite" : "text-charcoal/70 hover:text-charcoal"
                      }`}
                    >
                      {item.label}
                    </span>
                    <div className="absolute top-full left-0 pt-6 hidden group-hover:block w-64 opacity-0 group-hover:opacity-100 group-hover:animate-fade-up">
                      <div className="bg-olive text-offwhite border border-offwhite/10 p-5 flex flex-col gap-4 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="text-sm font-medium hover:text-offwhite transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to!}
                  className={`text-eyebrow relative transition-colors !text-[16px] !tracking-wider font-semibold ${
                    isOverlay ? "text-offwhite/85 hover:text-offwhite" : "text-charcoal/70 hover:text-charcoal"
                  }`}
                  activeProps={{ className: "text-terracotta" }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="magnetic-btn hidden md:inline-flex px-6 py-3 rounded-none"
            >
              <span>Get a Quote</span>
              <span className="btn-arrow">→</span>
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`lg:hidden flex flex-col gap-1.5 p-2 ${isOverlay ? "text-offwhite" : "text-charcoal"}`}
            >
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / fullscreen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-olive text-offwhite transition-all duration-700 h-[100dvh] ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="grain-overlay absolute inset-0" />
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center justify-between px-6 md:px-10 py-6 shrink-0 border-b border-offwhite/5">
            <img src="/logos/Logo Off-White.svg" alt="Formline Joinery" className="h-4 md:h-6" />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-eyebrow text-offwhite/70 hover:text-terracotta transition"
            >
              Close ✕
            </button>
          </div>
          <nav data-lenis-prevent className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 md:px-16 py-6 md:py-10">
            <div className="flex flex-col justify-start md:justify-center min-h-full gap-5 md:gap-6">
              {NAV.map((item, i) => {
                if (item.children) {
                  const isGroupOpen = openGroup === item.label;
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setOpenGroup(isGroupOpen ? null : item.label)}
                        aria-expanded={isGroupOpen}
                        className="group flex items-center justify-between gap-4 text-left"
                        style={{ animation: open ? `fade-up 700ms ${i * 80 + 100}ms both cubic-bezier(0.2,0.8,0.2,1)` : undefined }}
                      >
                        <span
                          className={`text-display text-4xl sm:text-6xl md:text-[7rem] leading-none transition-colors duration-300 ${
                            isGroupOpen ? "text-offwhite" : "text-offwhite/50 group-hover:text-offwhite/80"
                          }`}
                        >
                          {item.label}.
                        </span>
                        <svg
                          className={`h-7 w-7 md:h-9 md:w-9 shrink-0 text-terracotta transition-transform duration-500 ${
                            isGroupOpen ? "rotate-45" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </button>
                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          isGroupOpen ? "grid-rows-[1fr] opacity-100 mt-4 mb-2 md:mb-4" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="flex flex-col gap-3 pl-4 border-l-2 border-terracotta/40 ml-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.to}
                                to={child.to}
                                onClick={() => setOpen(false)}
                                className="text-lg sm:text-2xl md:text-3xl font-display text-offwhite hover:text-terracotta transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.to}
                    to={item.to!}
                    onClick={() => setOpen(false)}
                    className="text-display text-4xl sm:text-6xl md:text-[7rem] leading-none text-offwhite hover:text-terracotta transition-colors duration-500"
                    style={{ animation: open ? `fade-up 700ms ${i * 80 + 100}ms both cubic-bezier(0.2,0.8,0.2,1)` : undefined }}
                  >
                    {item.label}.
                  </Link>
                );
              })}
            </div>
          </nav>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 md:px-10 py-6 md:py-8 border-t border-offwhite/10 text-eyebrow text-[0.65rem] text-offwhite/60 shrink-0 bg-charcoal/50">
            <div>
              <div className="text-offwhite/40 mb-1.5 font-semibold">Studio</div>
              37 Adrian Road,<br/>Campbellfield
            </div>
            <div className="break-all">
              <div className="text-offwhite/40 mb-1.5 font-semibold">Enquiries</div>
              admin@formlinejoinery.com.au
            </div>
            <div>
              <div className="text-offwhite/40 mb-1.5 font-semibold">Since</div>
              Est. 1999
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
