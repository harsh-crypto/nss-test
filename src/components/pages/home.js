import React from 'react';
import '../../App.css';
import Cards from '../cards';
import HeroSection from '../HeroSection';
import Footer from '../footer';
import SlideShow from '../imagesilder';
function Home() {
  return (
    <>
      <HeroSection />
      <SlideShow />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;