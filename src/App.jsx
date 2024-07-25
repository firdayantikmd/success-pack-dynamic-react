import { useState } from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import OurProducts from './components/OurProducts/OurProducts';
import About from './components/About/About';
import OurCompany from './components/OurCompany/OurCompany';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OurProducts />
      <About />
      <OurCompany />
      <FAQ />
      <Footer />
      <main>
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default App;
