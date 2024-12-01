import React from "react";
import "./homePageContent.css";

interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
}

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

const SupplementsPage = () => {
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
        <h2>Supplement Products</h2>
        <div className="product-grid">{renderProducts(supplements)}</div>
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

export default SupplementsPage;