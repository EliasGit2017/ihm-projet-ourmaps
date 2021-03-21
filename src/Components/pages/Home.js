import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Material from '../Material'; 
import Material2 from '../Material2';


function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Material />
            <Material2 />
            <Footer />
        </>
    );
}

export default Home;

