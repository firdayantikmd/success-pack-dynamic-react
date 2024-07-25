import React, { useState } from "react";
import './FAQ.css';
import { IconMinus, IconPlus } from "@tabler/icons-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    } 
  };

  const FAQData = [
    {
      question: "What makes your recycled plastics suitable for food contact applications?",
      answer: "Our recycled LDPE and PET undergo thorough processing to meet stringent food safety regulations. They are tested and certified to ensure they are safe for direct contact with food, maintaining high standards of quality and safety."
    },
    {
      question: "How do you ensure the quality of your recycled plastic products?",
      answer: "We conduct rigorous testing and adhere to strict quality control measures to ensure the high quality of our recycled plastic products."
    },
    {
      question: "Can you assist with product customization based on specific requirements?",
      answer: "Yes, we offer customization services to meet specific requirements. Our team works closely with clients to deliver tailored solutions."
    },
    {
      question: "What sustainability practices does your company prioritize?",
      answer: "We prioritize sustainable practices such as recycling, reducing waste, and minimizing our environmental impact through various initiatives."
    }
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <p>Answers to Your Common Questions</p>
      <div className="faq-content">
        {FAQData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              {activeIndex === index ? <IconMinus size={16} /> : <IconPlus size={16} />}
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;