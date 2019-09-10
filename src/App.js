import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/Highlights'
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';


function App() {
  return (
    <div className="App" style={{ height: "1500px", }}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venuenfo">
        <VenueNfo />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
