import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';

/* Hero Section, The Homepage component */
function HeroSection() {
  return (
    <div className='hero-container'>
        {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
    <h1>HomePage title</h1>
    <p>Tagline Lorem Ipsum</p>
    <div className="hero-btns">
        <Button 
        className='btns' 
        buttonStyle='btn--outline' 
        buttonSize='btn--large'>Get Started </Button>
        <Button 
        className='btns' 
        buttonStyle='btn--primary' 
        buttonSize='btn--large'>Play Now
       {/* Play Icon */}
        <i className='far fa-play-circle'/>  
        </Button>
    </div>
    </div>
  )
}

export default HeroSection