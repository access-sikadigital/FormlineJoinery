import heroKitchen from "@/assets/hero-kitchen.jpg";
import projectWalnut from "@/assets/project-walnut.jpg";
import projectWardrobe from "@/assets/project-wardrobe.jpg";
import detailBrass from "@/assets/detail-brass.jpg";

export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  read: string;
  cover: string;
  content: {
    type: "p" | "h2" | "list";
    text?: string;
    items?: string[];
  }[];
}

export const blogs: BlogPost[] = [
  {
    title: "How Much Does a Custom Kitchen Cost in Melbourne? (2026 Guide)",
    slug: "custom-kitchen-cost-melbourne",
    category: "Cost Guide",
    excerpt: "Wondering what a custom kitchen costs in Melbourne? Here’s what drives the price, what to budget and how to get an accurate quote for your renovation.",
    author: "Formline Joinery",
    date: "August 12, 2024",
    read: "5 Min",
    cover: projectWalnut,
    content: [
      {
        type: "p",
        text: '“How much will it cost?” is the first question almost every homeowner asks when they start planning a new kitchen — and it’s a fair one. A kitchen is one of the biggest investments you’ll make in your home, and the price can vary widely. In this guide, we’ll walk you through what actually drives the cost of a custom kitchen in Melbourne, so you can plan your budget with confidence.'
      },
      {
        type: "h2",
        text: "Why custom kitchens are priced individually"
      },
      {
        type: "p",
        text: "Unlike flat-pack or off-the-shelf options, a custom kitchen is designed and built specifically for your home. That means the price reflects your exact layout, materials and finishes rather than a one-size-fits-all package. The upside: you get a kitchen that fits perfectly, uses every centimetre and lasts for decades. The trade-off: there’s no single sticker price — your quote is built around your project."
      },
      {
        type: "h2",
        text: "The main things that affect the price"
      },
      {
        type: "list",
        items: [
          "Size and layout — more cabinetry, larger islands and complex layouts take more materials and labour.",
          "Benchtops — laminate is the most affordable, while engineered stone (like Caesarstone) and natural stone sit at the premium end.",
          "Cabinetry finishes — melamine, laminate, two-pack paint and timber veneer all sit at different price points.",
          "Hardware — soft-close runners, premium hinges and specialty storage add cost but improve everyday use.",
          "Appliances and integration — integrated and built-in appliances require additional joinery."
        ]
      },
      {
        type: "p",
        text: "As a general guide, custom kitchens in Melbourne typically start in the mid five figures and rise from there depending on size and finishes. This is a broad market range only — the sole way to know your real figure is a measure and quote."
      },
      {
        type: "h2",
        text: "How to get the best value"
      },
      {
        type: "p",
        text: "The smartest way to control cost isn’t to cut corners — it’s to work with an experienced joiner early. A good designer will help you prioritise where to invest (the things you touch and use every day) and where to save, so your budget goes further without compromising the result."
      },
      {
        type: "h2",
        text: "Get an accurate quote"
      },
      {
        type: "p",
        text: "At Formline Joinery, we’ve been designing and manufacturing custom kitchens across Melbourne for 25 years. We offer a free consultation and a detailed, transparent quote — no hidden costs. If you’re ready to find out what your dream kitchen would cost, get in touch today."
      }
    ]
  },
  {
    title: "Custom vs Flat-Pack Kitchens: Which Is Right for Your Melbourne Home?",
    slug: "custom-vs-flat-pack-kitchens",
    category: "Guides",
    excerpt: "Custom or flat-pack kitchen? Compare cost, quality, fit and lifespan to decide which suits your Melbourne home — with tips from a 25-year joinery team.",
    author: "Formline Joinery",
    date: "September 02, 2024",
    read: "4 Min",
    cover: heroKitchen,
    content: [
      {
        type: "p",
        text: "When you’re planning a new kitchen, one of the first decisions is whether to go custom or flat-pack. Both have their place — the right choice depends on your budget, your space and how long you plan to stay in your home. Here’s an honest comparison to help you decide."
      },
      {
        type: "h2",
        text: "Flat-pack kitchens: the pros and cons"
      },
      {
        type: "p",
        text: "Flat-pack kitchens are pre-manufactured in standard sizes and assembled on site. Their biggest advantage is upfront cost — they’re the cheapest way to get a new kitchen. They can work well for rentals, quick refreshes or smaller budgets."
      },
      {
        type: "p",
        text: "The downsides show up in fit and longevity. Standard sizes rarely use your space efficiently, leaving awkward gaps or filler panels. Materials and hardware are often lighter-duty, so they tend to show wear sooner — especially in a busy family kitchen."
      },
      {
        type: "h2",
        text: "Custom kitchens: the pros and cons"
      },
      {
        type: "p",
        text: "A custom kitchen is designed and built specifically for your home. Every cabinet is made to measure, so you get a perfect fit, smarter storage and a finish tailored to your style. You also choose your materials and hardware, which means better durability and a kitchen that feels genuinely yours."
      },
      {
        type: "p",
        text: "The trade-off is a higher upfront cost and a longer lead time, because your kitchen is being made rather than pulled off a shelf. For most homeowners planning to stay put, that investment pays off in daily usability and long-term value."
      },
      {
        type: "h2",
        text: "Which should you choose?"
      },
      {
        type: "list",
        items: [
          "Choose flat-pack if you’re on a tight budget, renovating a rental, or need something quick and temporary.",
          "Choose custom if you want the best use of your space, premium materials, a tailored look and a kitchen built to last."
        ]
      },
      {
        type: "h2",
        text: "The Formline approach"
      },
      {
        type: "p",
        text: "For 25 years, Formline Joinery has built custom kitchens across Melbourne that make the most of every home. If you’re weighing up your options, we’re happy to talk through what would work best for your space and budget — no pressure, just honest advice."
      }
    ]
  },
  {
    title: "7 Clever Kitchen Storage Ideas Melbourne Homeowners Love",
    slug: "kitchen-storage-ideas",
    category: "Design Inspiration",
    excerpt: "Make the most of your kitchen with 7 smart storage ideas — from deep drawers to hidden pantries — designed by Melbourne’s custom joinery experts.",
    author: "Formline Joinery",
    date: "October 14, 2024",
    read: "6 Min",
    cover: projectWardrobe,
    content: [
      {
        type: "p",
        text: "A beautiful kitchen that’s hard to use is a daily frustration. The secret to a kitchen that works as good as it looks is smart, considered storage — and that’s where custom joinery really shines. Here are seven of the storage ideas our Melbourne clients love most."
      },
      {
        type: "list",
        items: [
          "Deep pot drawers — wide, deep drawers hold pots, pans and appliances far more easily than low cupboards, and everything is visible at a glance.",
          "A walk-in or hidden butler’s pantry — keep the mess and small appliances out of sight while entertaining, with a dedicated prep and storage zone.",
          "Full-height pantry cabinets — floor-to-ceiling storage uses vertical space that standard kitchens waste, adding serious capacity.",
          "Corner solutions — clever pull-outs and carousels turn awkward corners into fully usable storage.",
          "Integrated bins — pull-out bin drawers keep waste and recycling tidy, hidden and easy to access.",
          "Custom drawer inserts — dividers for cutlery, utensils and spices keep everything organised and in its place.",
          "Appliance garages — a benchtop cupboard hides the kettle, toaster and coffee machine, keeping your bench clear and calm."
        ]
      },
      {
        type: "h2",
        text: "Storage designed around you"
      },
      {
        type: "p",
        text: "The best storage isn’t about cramming in more cupboards — it’s about designing around how you actually use your kitchen. That’s the advantage of custom joinery: every drawer, shelf and cupboard is planned for your space and your routine."
      },
      {
        type: "p",
        text: "At Formline Joinery, we’ve spent 25 years designing kitchens across Melbourne that are as practical as they are beautiful. If you’d love a kitchen with a place for everything, we’d be glad to help."
      }
    ]
  },
  {
    title: "What to Look for in a Commercial Joinery Partner in Melbourne",
    slug: "choosing-a-commercial-joinery-partner",
    category: "Commercial",
    excerpt: "Fitting out a shop, office or development? Here’s what to look for in a commercial joinery partner in Melbourne — from capacity to quality and timelines.",
    author: "Formline Joinery",
    date: "November 08, 2024",
    read: "7 Min",
    cover: detailBrass,
    content: [
      {
        type: "p",
        text: "Whether you’re fitting out a retail store, an office or a multi-unit development, your joinery partner can make or break the project. Great joinery elevates a space and lasts for years; poor joinery causes delays, blowouts and headaches. Here’s what to look for when choosing a commercial joinery partner in Melbourne."
      },
      {
        type: "h2",
        text: "1. In-house manufacturing"
      },
      {
        type: "p",
        text: "Partners who design and manufacture in-house have far more control over quality and timelines than those who outsource. Ask where the work is actually made — a local workshop (like ours in Campbellfield) means tighter quality control and faster turnaround."
      },
      {
        type: "h2",
        text: "2. Proven experience"
      },
      {
        type: "p",
        text: "Commercial work has different demands to residential — durability, compliance and coordination with other trades all matter. Look for a team with a solid track record and years of experience delivering projects at your scale."
      },
      {
        type: "h2",
        text: "3. Capacity and reliability"
      },
      {
        type: "p",
        text: "Can they deliver on your program without dropping quality? A good commercial partner has the capacity to handle volume and the systems to hit deadlines. On commercial projects, reliability is everything."
      },
      {
        type: "h2",
        text: "4. End-to-end service"
      },
      {
        type: "p",
        text: "Working with one team for design, manufacture and installation removes the finger-pointing that happens when responsibilities are split. It means clearer communication, one point of accountability and fewer things falling through the cracks."
      },
      {
        type: "h2",
        text: "5. Quality materials and finishes"
      },
      {
        type: "p",
        text: "Commercial spaces take a beating. Make sure your partner uses commercial-grade materials and trusted supplier brands so your fitout still looks sharp years down the track."
      },
      {
        type: "h2",
        text: "Partner with Formline"
      },
      {
        type: "p",
        text: "Formline Joinery has delivered custom joinery and fitouts across Melbourne for 25 years, partnering with builders, developers and businesses on everything from single shopfronts to large developments. If you’re planning a commercial project, we’d love to talk."
      }
    ]
  }
];
