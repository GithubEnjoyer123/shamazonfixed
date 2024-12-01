import React from "react";
import "./homePageContent.css";


interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
}

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

const SkincarePage = () => {
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
    <div className="homepage">
      <header className="header">
        <div className="logo">Shamazon</div>
        <nav className="nav"></nav>
      </header>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Skincare Products</h2>
        <div className="product-grid">{renderProducts(skincare)}</div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#help">Help Center</a>
        </div>
      </footer>
    </div>
  );
};

export default SkincarePage;
