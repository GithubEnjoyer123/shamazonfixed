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
      image: "/images/supplement1.jpg",
      name: "Whey Protein",
      description: "High-quality gym protein.",
      price: "$30",
    },
    {
      image: "/images/supplement2.jpg",
      name: "Creatine Powder",
      description: "Boost strength and energy.",
      price: "$25",
    },
  ];

  const toys: Product[] = [
    {
      image: "/images/toy1.jpg",
      name: "Educational Toy",
      description: "Fun and learning combined.",
      price: "$10",
    },
    {
      image: "/images/toy2.jpg",
      name: "Puzzle Set",
      description: "Interactive and engaging.",
      price: "$12",
    },
  ];

  const blueLightBlockers: Product[] = [
    {
      image: "/images/blocker1.jpg",
      name: "Blue Light Glasses",
      description: "Protect your eyes from screens.",
      price: "$20",
    },
    {
      image: "/images/blocker2.jpg",
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
