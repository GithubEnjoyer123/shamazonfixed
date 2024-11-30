import React from "react";
import "./catalog.css";

interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
}

const CatalogPage: React.FC = () => {
  const skincare: Product[] = [
    {
      image: "/images/skincare1.jpg",
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

  const supplements: Product[] = [
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

  const toys: Product[] = [
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

  const blueLightBlockers: Product[] = [
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

  const renderProducts = (products: Product[]) => {
    return products.map((product, index) => (
      <div className="product-card" key={index}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="product-price">{product.price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    ));
  };

  return (
    <div className="catalog-page">
      <div className="catalog-container skincare">
        <h2>Skincare</h2>
        <div className="product-list">{renderProducts(skincare)}</div>
      </div>
      <div className="catalog-container supplements">
        <h2>Supplements</h2>
        <div className="product-list">{renderProducts(supplements)}</div>
      </div>
      <div className="catalog-container toys">
        <h2>Toys</h2>
        <div className="product-list">{renderProducts(toys)}</div>
      </div>
      <div className="catalog-container blue-light-blockers">
        <h2>Blue Light Blockers</h2>
        <div className="product-list">{renderProducts(blueLightBlockers)}</div>
      </div>
    </div>
  );
};

export default CatalogPage;
