import React from "react";
import "./OurCompany.css";

const OurCompany = () => {
  return (
    <section className="our-company">
      <h2>Gallery</h2>
      <p>Crafting Sustainable Excellence</p>
      <div className="company-content">
        <img src="/assets/images/our-company/company-1.png" alt="Company 1" />
        <img src="/assets/images/our-company/company-2.png" alt="Company 2" />
        <img src="/assets/images/our-company/company-3.png" alt="Company 3" />
        <img src="/assets/images/our-company/company-1.png" alt="Company 1" />
        <img src="/assets/images/our-company/company-2.png" alt="Company 2" />
        <img src="/assets/images/our-company/company-3.png" alt="Company 3" />
      </div>
    </section>
  );
};

export default OurCompany;