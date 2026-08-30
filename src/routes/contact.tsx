import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Formline Joinery | Get a Custom Quote" },
      { name: "description", content: "Contact our Campbellfield workshop to discuss your custom kitchen or cabinetry project. Get a detailed quote from Melbourne’s joinery experts." },
      { property: "og:title", content: "Contact Formline Joinery | Get a Custom Quote" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    scope: "Kitchen",
    message: "",
    consent: false,
  });

  return (
    <div className="bg-offwhite text-charcoal min-h-screen flex flex-col justify-between">
      <Header variant="solid" />

      {/* Main split showcase section */}
      <section className="flex-grow pt-24 lg:pt-20">
        <div className="grid lg:grid-cols-12 min-h-screen">
          
          {/* Left Column — The Workshop (Dark Cinematic Panel) */}
          <div className="lg:col-span-5 bg-olive text-offwhite flex flex-col justify-between p-8 md:p-12 lg:p-20 relative overflow-hidden grain-overlay">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none select-none">
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-offwhite/[0.03] blur-[100px]" />
            </div>

            <div className="relative z-10 pt-16">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-1.5 w-1.5 bg-offwhite rounded-full" />
                  <span className="text-eyebrow text-offwhite text-[0.68rem] tracking-widest uppercase">The Workshop</span>
                  <span className="h-px w-16 bg-offwhite/15" />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-8">
                  Drop by <br />
                  our space in <br />
                  <span className="text-cream">Campbellfield</span>.
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-offwhite/50 text-sm leading-relaxed max-w-sm mb-12">
                  Drop by our Campbellfield workshop to see our work up close, inspect materials, and discuss layouts with our design team.
                </p>
              </Reveal>

              {/* Info Matrix */}
              <div className="grid gap-8 sm:grid-cols-2 pt-8 border-t border-offwhite/10">
                <Reveal delay={0.2}>
                  <div>
                    <div className="text-eyebrow text-offwhite/30 text-[0.58rem] mb-2 uppercase">Coordinates</div>
                    <address className="not-italic text-sm font-medium leading-relaxed">
                      37 Adrian Road,<br />
                      Campbellfield VIC 3061
                    </address>
                  </div>
                </Reveal>
                <Reveal delay={0.25}>
                  <div>
                    <div className="text-eyebrow text-offwhite/30 text-[0.58rem] mb-2 uppercase">Direct Lines</div>
                    <p className="text-sm font-medium leading-relaxed">
                      <a href="mailto:admin@formlinejoinery.com.au" className="hover:text-offwhite transition-colors break-all">
                        admin@formlinejoinery.com.au
                      </a>
                      <br />
                      <a href="tel:0401869565" className="hover:text-offwhite transition-colors">
                        0401 869 565
                      </a>
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div>
                    <div className="text-eyebrow text-offwhite/30 text-[0.58rem] mb-2 uppercase">Hours</div>
                    <p className="text-sm font-medium leading-relaxed">
                      Mon–Fri: 8:00 – 17:00<br />
                      Weekend by appointment
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.35}>
                  <div>
                    <div className="text-eyebrow text-offwhite/30 text-[0.58rem] mb-2 uppercase">Social Networks</div>
                    <div className="flex gap-3 mt-2">
                      {["FB", "IG"].map((s) => (
                        <a
                          key={s}
                          href="#"
                          className="h-8 w-8 rounded-full border border-offwhite/15 flex items-center justify-center text-xs hover:text-offwhite hover:border-offwhite/40 transition-all"
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Grayscale Map Canvas inside the dark column */}
            <Reveal delay={0.4} className="mt-12 lg:mt-20">
              <div className="relative aspect-[21/9] lg:aspect-[16/9] w-full border border-offwhite/10 overflow-hidden group">
                <iframe
                  title="Workshop Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.2974404097486!2d144.95475147683935!3d-37.665675572239474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad650058b763ec7%3A0xc02898c69f2e8c0b!2s37%20Adrian%20Rd%2C%20Campbellfield%20VIC%203061!5e0!3m2!1sen!2sau!4v1719999999999!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full grayscale contrast-125 brightness-75 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-1000"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column — The Project (Elegant Light Form Panel) */}
          <div className="lg:col-span-7 bg-offwhite flex flex-col justify-center p-8 md:p-12 lg:p-20 lg:pt-32">
            
            <div className="max-w-2xl w-full mx-auto">
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                  <span className="text-eyebrow text-terracotta font-bold text-xs tracking-widest uppercase">Request a quote</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-display text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mb-6">
                  Let's discuss <br />
                  your{" "}
                  <span className="text-brass">project</span>.
                </h2>
                <p className="text-charcoal/70 text-base md:text-lg leading-relaxed max-w-lg mb-12">
                  Whether you have architectural plans ready to quote or you’re starting from scratch, we’d love to hear about your project. Fill in the form below and one of our team will get back to you within 24 hours.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-12"
                >
                  {sent ? (
                    <div className="py-20 text-center border border-charcoal/10 bg-cream">
                      <div className="text-eyebrow text-terracotta mb-4">Message Sent</div>
                      <h3 className="text-display text-3xl mb-3">Thank you for writing.</h3>
                      <p className="text-charcoal/70 text-sm max-w-sm mx-auto">
                        Our workshop team will review your brief and get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Styled Inputs Grid */}
                      <div className="grid gap-10 md:grid-cols-2">
                        {/* Name */}
                        <div className="group relative border-b border-charcoal/20 focus-within:border-terracotta transition-all py-3">
                          <span className="absolute top-0 right-0 text-[0.55rem] text-charcoal/30 tracking-widest uppercase">01</span>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name *"
                            className="w-full bg-transparent outline-none placeholder:text-charcoal/40 text-base font-medium"
                          />
                        </div>

                        {/* Email */}
                        <div className="group relative border-b border-charcoal/20 focus-within:border-terracotta transition-all py-3">
                          <span className="absolute top-0 right-0 text-[0.55rem] text-charcoal/30 tracking-widest uppercase">02</span>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email Address *"
                            className="w-full bg-transparent outline-none placeholder:text-charcoal/40 text-base font-medium"
                          />
                        </div>

                        {/* Phone */}
                        <div className="group relative border-b border-charcoal/20 focus-within:border-terracotta transition-all py-3">
                          <span className="absolute top-0 right-0 text-[0.55rem] text-charcoal/30 tracking-widest uppercase">03</span>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Phone Number"
                            className="w-full bg-transparent outline-none placeholder:text-charcoal/40 text-base font-medium"
                          />
                        </div>

                        {/* Scope / Service selection */}
                        <div className="group relative border-b border-charcoal/20 focus-within:border-terracotta transition-all py-3">
                          <span className="absolute top-0 right-0 text-[0.55rem] text-charcoal/30 tracking-widest uppercase">04</span>
                          <select
                            value={formData.scope}
                            onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                            className="w-full bg-transparent outline-none text-base font-medium appearance-none text-charcoal/80"
                          >
                            <option value="Kitchen">Kitchen Joinery</option>
                            <option value="Cabinetry">Bespoke Cabinetry</option>
                            <option value="Commercial">Commercial Fitout</option>
                            <option value="Shop">Shop Fitout</option>
                            <option value="Consultation">Design Consultation</option>
                          </select>
                          <span className="absolute right-0 bottom-4 pointer-events-none text-charcoal/40 text-xs">▼</span>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="group relative border-b border-charcoal/20 focus-within:border-terracotta transition-all py-3">
                        <span className="absolute top-0 right-0 text-[0.55rem] text-charcoal/30 tracking-widest uppercase">05</span>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project, timeline and ideas... *"
                          className="w-full bg-transparent outline-none placeholder:text-charcoal/40 text-base font-medium resize-none"
                        />
                      </div>

                      {/* Consent Checkbox */}
                      <div className="flex items-start gap-3">
                        <input
                          id="consent"
                          type="checkbox"
                          required
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-1 h-4 w-4 border-charcoal/30 accent-terracotta rounded-none cursor-pointer"
                        />
                        <label htmlFor="consent" className="text-xs text-charcoal/60 leading-relaxed cursor-pointer select-none">
                          I agree that my contact details are collected, processed, and stored to service my enquiry in accordance with the privacy policy.
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div>
                        <button
                          type="submit"
                          className="magnetic-btn px-10 py-5 rounded-none"
                        >
                          <span>Get in Touch</span>
                          <span className="btn-arrow">→</span>
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
