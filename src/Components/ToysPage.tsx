import React from "react";
import "./homePageContent.css";


interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
}

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
const ToysPage = () => {
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
        <h2>Toy Products</h2>
        <div className="product-grid">{renderProducts(toys)}</div>
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

export default ToysPage;