import React from "react";
import "./homePageContent.css";

const ToysPage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Shamazon</div>
        <nav className="nav"></nav>
      </header>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Add Toy Products</h2>
        <div className="product-grid">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
        </div>
      </section>

      {/* Arbitrage Section */}
      <section className="arbitrage">
        <h2>Compare Prices Instantly</h2>
        <input type="text" placeholder="Search for a product..." className="price-compare-input" />
        <button className="compare-button">Compare Prices</button>
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