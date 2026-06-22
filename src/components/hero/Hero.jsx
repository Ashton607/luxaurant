import React from 'react'
import './Hero.css'
import { IoLocationOutline,IoTimeOutline  } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='Hero'>

      <div className="hero-content">
        <span className="hero-badge">our weekly special</span>
        
        <h1 className="hero-title">
          <span className="line1">Munch</span>
          <span className="line2">Box</span>
        </h1>

        <p className="hero-subtitle">
          Aged to perfection, seared with passion every cut tells<br />
          a story of flavour, fire, and fine dining.</p>

        <span className='hero-price'>R80.00 per person</span>

        <div className="hero-reviews">
          <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">"The steak was absolutely divine. Best dining experience in the city."</p>
          <span className="review-author">— James T.</span>
          </div>

          <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">"Every bite was perfection. This weeks munch box melted in my mouth."</p>
          <span className="review-author">— Sofia M.</span>
          </div>

          <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">"An unforgettable evening. The ambiance and food were world class."</p>
          <span className="review-author">— David K.</span>
          </div>
          
        </div>

        <div className="hero-footer">
          <div className="hero-footer-left">
          <span><IoTimeOutline size={16} style={{ marginBottom: '-3px' }} /> Mon–Thu 5pm–10pm · Fri–Sat 5pm–11pm · Sun 4pm–9pm</span>
          </div>  
          <div className="hero-footer-right">
          <span><IoLocationOutline size={16} style={{ marginBottom: '-3px' }} /> 12 Carel Cilliers St,Douglas 8730</span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
