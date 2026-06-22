import { useState,useEffect } from 'react'
import './Hero.css'
import { IoLocationOutline,IoTimeOutline  } from "react-icons/io5";

const Hero = () => {

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const span = entry.target.querySelector('.hero-badge')
          const line1 = entry.target.querySelector('.line1')
          const line2 = entry.target.querySelector('.line2')
          const p = entry.target.querySelector('.hero-subtitle')
          const price = entry.target.querySelector('.hero-price')
          
          if (entry.isIntersecting) {
            span.classList.add('animate-in');
            line1.classList.add('animate-in');
            line2.classList.add('animate-in');
            p.classList.add('animate-in');
            price.classList.add('animate-in');
          } else {
            span.classList.remove('animate-in');
            line1.classList.remove('animate-in');
            line2.classList.remove('animate-in');
            p.classList.remove('animate-in');
            price.classList.remove('animate-in');
          }
        });
      }, { threshold: 0.1 });
    
      const HeroContent = document.querySelector('.hero-content');
      if (HeroContent) {
        observer.observe(HeroContent);
      }
    
      return () => observer.disconnect();
    }, []);
  

  {/*Review cards*/}
  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const card1 = entry.target.querySelector('.review-card-1')
          const stars1 = entry.target.querySelector('.review-stars-1')
          const text1 = entry.target.querySelector('.review-text-1')
          const author1 = entry.target.querySelector('.review-author-1')
          
          const card2 = entry.target.querySelector('.review-card-2')
          const stars2 = entry.target.querySelector('.review-stars-2')
          const text2 = entry.target.querySelector('.review-text-2')
          const author2 = entry.target.querySelector('.review-author-2')

          const card3 = entry.target.querySelector('.review-card-3')
          const stars3 = entry.target.querySelector('.review-stars-3')
          const text3 = entry.target.querySelector('.review-text-3')
          const author3 = entry.target.querySelector('.review-author-3')
          
          if (entry.isIntersecting) {
            card1.classList.add('animate-in');
            stars1.classList.add('animate-in');
            text1.classList.add('animate-in');
            author1.classList.add('animate-in');

            card2.classList.add('animate-in');
            stars2.classList.add('animate-in');
            text2.classList.add('animate-in');
            author2.classList.add('animate-in');

            card3.classList.add('animate-in');
            stars3.classList.add('animate-in');
            text3.classList.add('animate-in');
            author3.classList.add('animate-in');
           
          } else {
            card1.classList.remove('animate-in');
            stars1.classList.remove('animate-in');
            text1.classList.remove('animate-in');
            author1.classList.remove('animate-in');
            
            card2.classList.remove('animate-in');
            stars2.classList.remove('animate-in');
            text2.classList.remove('animate-in');
            author2.classList.remove('animate-in');

            card3.classList.remove('animate-in');
            stars3.classList.remove('animate-in');
            text3.classList.remove('animate-in');
            author3.classList.remove('animate-in');
          }
        });
      }, { threshold: 0.1 });
    
      const HeroReviews = document.querySelector('.hero-reviews');
      if (HeroReviews) {
        observer.observe(HeroReviews);
      }
    
      return () => observer.disconnect();
    }, []);

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
          <div className="review-card-1">
          <div className="review-stars-1">★★★★★</div>
          <p className="review-text-1">"The steak was absolutely divine. Best dining experience in the city."</p>
          <span className="review-author-1">— James T.</span>
          </div>

          <div className="review-card-2">
          <div className="review-stars-2">★★★★★</div>
          <p className="review-text-2">"Every bite was perfection. This weeks munch box melted in my mouth."</p>
          <span className="review-author-2">— Sofia M.</span>
          </div>

          <div className="review-card-3">
          <div className="review-stars-3">★★★★★</div>
          <p className="review-text-3">"An unforgettable evening. The ambiance and food were world class."</p>
          <span className="review-author-3">— David K.</span>
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
