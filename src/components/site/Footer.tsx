import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative bg-olive text-offwhite grain-overlay overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 pt-24 md:pt-32 pb-10">
        <div className="mb-16 border-b border-offwhite/10 pb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link to="/" aria-label="Formline Joinery">
            <img src="/logos/Logo Off-White.svg" alt="Formline Joinery" className="h-7 md:h-9" />
          </Link>
          <p className="text-eyebrow text-offwhite/50">
            Bespoke Architectural Joinery & Cabinetry · Melbourne, VIC
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="text-eyebrow text-offwhite/50 mb-6">Newsletter</div>
            <h3 className="text-display text-3xl md:text-5xl mb-8 max-w-md break-words hyphens-auto">
              Field notes from the workshop.
            </h3>
            <form className="flex w-full border-b border-offwhite/30 pb-3 max-w-md focus-within:border-offwhite/40 transition">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 bg-transparent outline-none placeholder:text-offwhite/40 text-sm md:text-base"
              />
              <button className="text-eyebrow text-[0.6rem] md:text-[0.68rem] text-offwhite/80 hover:text-offwhite transition shrink-0 ml-4">
                Subscribe →
              </button>
            </form>
          </div>

          <div>
            <div className="text-eyebrow text-offwhite/50 mb-6">Studio</div>
            <address className="not-italic text-offwhite/80 leading-relaxed">
              37 Adrian Road<br />
              Campbellfield VIC 3061<br />
              Melbourne, Australia
            </address>
          </div>

          <div>
            <div className="text-eyebrow text-offwhite/50 mb-6">Contact</div>
            <ul className="space-y-2 text-offwhite/80">
              <li className="break-all">admin@formlinejoinery.com.au</li>
              <li>0401 869 565</li>
              <li className="pt-4">Mon–Fri 8:00 – 17:00</li>
            </ul>
          </div>

          <div>
            <div className="text-eyebrow text-offwhite/50 mb-6">Explore</div>
            <ul className="space-y-2">
              {[
                ["/about", "About"],
                ["/custom-kitchens", "Custom Kitchens"],
                ["/custom-cabinetry-joinery", "Custom Cabinetry"],
                ["/shop-fitouts", "Shop Fitouts"],
                ["/commercial-projects", "Commercial Projects"],
                ["/portfolio", "Portfolio"],
                ["/blog", "Blog"],
                ["/faqs", "FAQs"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-offwhite/80 hover:text-offwhite transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-offwhite/10 pt-8">
          <div className="text-eyebrow text-offwhite/40">
            © {new Date().getFullYear()} Formline Joinery. Crafted in Melbourne.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-eyebrow text-offwhite/60">
            <a href="https://www.instagram.com/axiom_themes/" className="hover:text-offwhite transition">Instagram</a>
            <a href="https://www.facebook.com/AxiomThemes" className="hover:text-offwhite transition">Facebook</a>
          </div>
        </div>

        <div className="pointer-events-none select-none mt-16 -mb-8 md:-mb-8">
          <img
            src="/logos/Logo Off-White.svg"
            alt=""
            aria-hidden
            className="w-full opacity-[0.08]"
          />
        </div>
      </div>
    </footer>
  );
}

