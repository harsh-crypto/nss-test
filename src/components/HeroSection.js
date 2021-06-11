import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className='hero-container'>
     <h1>Welcome to NSS NSUT</h1>
     <div className = "hero-btns">
          <Button  buttonStyle= "btn --primary" buttonSize = "btn --large" onClick = "https://linktr.ee/nssnsutcell">Find us on linktree</Button>
     </div>
    </div>
  );
}

export default HeroSection;