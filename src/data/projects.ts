// Shared project data for portfolio + home
import projectOlive from "@/assets/project-olive.jpg";
import projectWalnut from "@/assets/project-walnut.jpg";
import projectWardrobe from "@/assets/project-wardrobe.jpg";
import detailBrass from "@/assets/detail-brass.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: number;
  category: "Kitchens" | "Cabinetry" | "Commercial" | "Shop Fitouts";
  cover: string;
  intro: string;
  scope: string[];
  materials: string[];
};

export const projects: Project[] = [
  {
    slug: "brunswick-kitchen",
    title: "Brunswick",
    location: "Brunswick, VIC",
    year: 2024,
    category: "Kitchens",
    cover: projectOlive,
    intro:
      "A full custom kitchen renovation blending warm timber, stone benchtops and clever storage for a growing family.",
    scope: ["Complete kitchen renovation", "Custom cabinetry"],
    materials: ["Warm timber", "Stone benchtops"],
  },
  {
    slug: "south-melbourne-joinery",
    title: "South Melbourne",
    location: "South Melbourne, VIC",
    year: 2024,
    category: "Cabinetry",
    cover: projectWalnut,
    intro:
      "Floor-to-ceiling custom joinery designed to maximise space and light in a compact inner-city home.",
    scope: ["Custom joinery"],
    materials: ["Custom veneer", "Integrated lighting"],
  },
  {
    slug: "elwood-joinery",
    title: "Elwood",
    location: "Elwood, VIC",
    year: 2023,
    category: "Cabinetry",
    cover: projectWardrobe,
    intro:
      "Bespoke living and storage joinery crafted to complement a light-filled coastal renovation.",
    scope: ["Living joinery", "Storage joinery"],
    materials: ["White oak", "Coastal finishes"],
  },
  {
    slug: "fitzroy-cabinet",
    title: "Fitzroy Cabinetry Study",
    location: "Fitzroy, VIC",
    year: 2023,
    category: "Cabinetry",
    cover: detailBrass,
    intro:
      "A detail study of a fluted oak cabinet meeting honed travertine — a language we return to across projects.",
    scope: ["Study cabinet", "Feature detail"],
    materials: ["Fluted oak", "Honed travertine", "Brushed brass"],
  },
  {
    slug: "collingwood-cafe",
    title: "Collingwood Café Fitout",
    location: "Collingwood, VIC",
    year: 2024,
    category: "Shop Fitouts",
    cover: heroKitchen,
    intro:
      "A 60-seat café fitout in fluted timber and stone, delivered end-to-end in ten weeks.",
    scope: ["Front counter", "Banquette seating", "Coffee station"],
    materials: ["Fluted oak", "Concrete", "Brass inlay"],
  },
];
