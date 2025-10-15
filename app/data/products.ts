export type Product = {
  name: string;
  rarity: string;
  price: string;
  tag: string;
  palette: string[];
};

export type ProductCollection = {
  id: "canvas" | "acrylic";
  title: string;
  description: string;
  detail: string;
  products: Product[];
};

export const productCollections: ProductCollection[] = [
  {
    id: "canvas",
    title: "Canvas Relics",
    description: "Hand-stretched cotton canvases with matte UV protection.",
    detail:
      "Each frame features extended art, laser-etched type, and magnetic mounts for floating display.",
    products: [
      {
        name: "Eternal Charizard",
        rarity: "Mythic Edition",
        price: "$220",
        tag: "Limited",
        palette: ["#f97316", "#facc15", "#7c2d12"],
      },
      {
        name: "Aurora Sylveon",
        rarity: "Dreamshine",
        price: "$190",
        tag: "Numbered",
        palette: ["#ec4899", "#a855f7", "#4c1d95"],
      },
      {
        name: "Starforge Mewtwo",
        rarity: "Astral",
        price: "$210",
        tag: "Holo",
        palette: ["#6366f1", "#22d3ee", "#0f172a"],
      },
      {
        name: "Verdant Venusaur",
        rarity: "Genesis",
        price: "$185",
        tag: "Gallery",
        palette: ["#22c55e", "#84cc16", "#14532d"],
      },
      {
        name: "Tempest Lugia",
        rarity: "Skyfall",
        price: "$215",
        tag: "Storm",
        palette: ["#38bdf8", "#0ea5e9", "#172554"],
      },
    ],
  },
  {
    id: "acrylic",
    title: "Acrylic Spectrals",
    description: "Polished acrylic panels with depth-layered UV prints.",
    detail:
      "Floating hardware kit included. Light-reactive layers reveal highlights under LED illumination.",
    products: [
      {
        name: "Galaxy Umbreon",
        rarity: "Shadowfoil",
        price: "$240",
        tag: "Bestseller",
        palette: ["#1f2937", "#6d28d9", "#22d3ee"],
      },
      {
        name: "Obsidian Giratina",
        rarity: "Phantom",
        price: "$260",
        tag: "New",
        palette: ["#111827", "#f59e0b", "#ef4444"],
      },
      {
        name: "Nebula Rayquaza",
        rarity: "Celestial",
        price: "$255",
        tag: "Signature",
        palette: ["#14b8a6", "#10b981", "#0f172a"],
      },
      {
        name: "Polar Articuno",
        rarity: "Frostbound",
        price: "$235",
        tag: "Limited",
        palette: ["#22d3ee", "#38bdf8", "#0ea5e9"],
      },
      {
        name: "Radiant Ho-Oh",
        rarity: "Phoenix",
        price: "$245",
        tag: "Collector",
        palette: ["#ef4444", "#f97316", "#facc15"],
      },
    ],
  },
];
