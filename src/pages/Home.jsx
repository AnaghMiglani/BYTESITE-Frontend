import React from 'react';
import Spline from '@splinetool/react-spline';
import CardCarousel from '../components/CardCarousel';
import CardContainer from '../components/CardContainer';
import HeroMid from '../components/Home-Hero-Section/HeroMid'
import Hero from '../components/Home-Hero-Section/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className='flex justify-around'>
        <Hero/>
        <div style={{position: "relative", width: '600px', height: '600px', right:'0px', top:'0px' }}>
          <Spline
            scene="https://prod.spline.design/qtMJZp9qovCHAQCX/scene.splinecode" 
          />
        </div>
      </div>
      <CardCarousel />
      <HeroMid />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default Home;
