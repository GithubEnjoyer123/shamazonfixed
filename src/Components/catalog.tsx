import React from "react";
import "./catalog.css";
import { skincare, supplements, toys, blueLightBlockers, Product } from "./productData";

const CatalogPage: React.FC = () => {
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

