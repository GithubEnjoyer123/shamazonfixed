export interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
}

export const skincare: Product[] = [
  {
    image:
      "/src/assets/VITAL_C_hydrating_intense_moisturizer_PDP_R01a.jpg.webp",
    name: "Hydrating Lotion",
    description: "Lightweight and moisturizing.",
    price: "$15",
  },
  {
    image: "/images/skincare2.jpg",
    name: "Soothing Cream",
    description: "Calms and refreshes skin.",
    price: "$18",
  },
];

export const supplements: Product[] = [
  {
    image:
      "/src/assets/Dymatize-Elite-100-Whey-Protein-vanilla_c7e05213-58df-4bd8-bf3d-5aab4f41cb43.jpg.webp",
    name: "Whey Protein",
    description: "High-quality gym protein.",
    price: "$30",
  },
  {
    image:
      "/src/assets/H6d5ffbbe058444bbb1c720aa27a61021A.jpg_300x300.jpg.avif",
    name: "Creatine Powder",
    description: "Boost strength and energy.",
    price: "$25",
  },
];

export const toys: Product[] = [
  {
    image: "/src/assets/istockphoto-178893038-612x612.jpg",
    name: "Educational Toy",
    description: "Fun and learning combined.",
    price: "$10",
  },
  {
    image: "src/assets/shutterstock_383521510-002-scaled-2.jpg",
    name: "Puzzle Set",
    description: "Interactive and engaging.",
    price: "$12",
  },
];

export const blueLightBlockers: Product[] = [
  {
    image:
      "/src/assets/blockbluelight-blue-light-blocking-glasses-amber-lens-sundown-taylor-blue-blocking-glasses-black-36633092915419.jpg.webp",
    name: "Blue Light Glasses",
    description: "Protect your eyes from screens.",
    price: "$20",
  },
  {
    image: "/src/assets/new.png.webp",
    name: "Screen Filter",
    description: "Blocks harmful blue light.",
    price: "$25",
  },
];
