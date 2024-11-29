import React from "react";
import "./homePageContent.css";

const homePageContent = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Shamazon</div>
        <nav className="nav"></nav>
      </header>

      <section className="hero">
        <h1 className="hero-headline">Find the Best Deals, Fast</h1>
        <p className="hero-subtitle">Your one-stop shop for everything</p>
        <button className="cta-button">Start Shopping</button>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="prodcut-grid">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
        </div>
      </section>

      <section className="arbitrage">
        <h2>Compare Prices Instantly</h2>
        <input type="text" placeholder="Search for a product..." className="price-compare-input" />
        <button className="compare-button">Compare Prices </button>
      </section>

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

export default homePageContent;
