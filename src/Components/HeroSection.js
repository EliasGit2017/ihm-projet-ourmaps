import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>Mappy, a simple and intuitive Map application</h1>
            <p>Use it, it's free ... because YOU are the product</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Joins US
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Joins US ANYWAY 
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
