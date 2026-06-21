import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>

      <div className="hero-content">
        <span className="hero-badge">our weekly special</span>
        
        <h1 className="hero-title">
          <span className="line1">Match</span>
          <span className="line2">Box</span>
        </h1>

        <p className="hero-subtitle">
          Aged to perfection, seared with passion every cut tells<br />
          a story of flavour, fire, and fine dining.</p>

        <span className='hero-price'>R70.00 per person</span>
      </div>

    </div>
  )
}

export default Hero
