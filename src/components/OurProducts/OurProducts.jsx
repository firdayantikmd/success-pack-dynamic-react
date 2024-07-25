import React from "react";
import './OurProducts.css';

const OurProducts = () => {
  return (
    <section className="our-products">
      <h2>Our Products</h2>
      <p>Eco-Friendly Solutions for Sustainable Manufacturing</p>
      <div className="product-content">
        <img src="/assets/images/our-products/products-img-1.png" alt="Product Material" />
        <div className="content-card">
          <span>PRODUCTS</span>
          <h4>Food Grade Recycled Low Density Polyethylene (LDPE)</h4>
          <p>Our LDPE meets stringent food safety standards, ideal for food packaging applications. It ensures both product integrity and consumer safety, while promoting sustainability in packaging solutions.</p>
        </div>
        <div className="content-card">
          <span>PRODUCTS</span>
          <h4>Food Grade Recycled Polyethylene Terephthalate (PET)</h4>
          <p>Specially processed to meet rigorous food safety regulations, our PET is used in bottles, trays, and containers. It offers a sustainable alternative without compromising on quality or safety.</p>
        </div>
        <img src="/assets/images/our-products/products-img-2.png" alt="Product Material" />
      </div>
    </section>
  );
}

export default OurProducts;