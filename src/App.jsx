import React from 'react';
import Header from './components/Header';
import UnderConstruction from './components/UnderConstruction';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="container mx-auto px-4">
        <Header />
        <UnderConstruction />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;