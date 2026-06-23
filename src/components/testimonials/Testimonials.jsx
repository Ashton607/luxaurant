import React, { useState } from 'react'
import './Testimonials.css'
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";

const reviews = [
  { name: 'James T.', stars: '★★★★★', text: 'The steak was absolutely divine. Best dining experience in the city.' },
  { name: 'Sofia M.', stars: '★★★★★', text: 'Every bite was perfection. The truffle rigatoni melted in my mouth.' },
  { name: 'David K.', stars: '★★★★★', text: 'An unforgettable evening. The ambiance and food were world class.' },
  { name: 'Leila R.', stars: '★★★★★', text: 'Luxaurant redefined fine dining for me. I will be back every month.' },
  { name: 'Marco P.', stars: '★★★★★', text: 'The sommeliers wine pairing was spot on. Exceptional from start to finish.' },
  { name: 'Aisha N.', stars: '★★★★★', text: 'The desserts alone are worth the visit. A truly premium experience.' },
  { name: 'Ryan S.', stars: '★★★★★', text: 'Perfectly seared, beautifully plated. This is what fine dining looks like.' },
  { name: 'Chloe B.', stars: '★★★★★', text: 'Warm atmosphere, flawless service, and food that speaks for itself.' },
]

const Testimonials = () => {
  const [expanded, setExpanded] = useState(false)

  const visibleReviews = expanded ? reviews : reviews.slice(0, 4)

  return (
    <div className='Testimonials'>
      <div className="testimonial-content">
        <span className="testimonial-badge">testimonials</span>
        <p className="testimonial-subtitle">what our guests say</p>
        <h1 className="testimonial-title">Meals Worth <span>Remembering</span></h1>

        <span className="review-expand" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Read All Reviews'}
          {expanded ? <FaArrowDown size={16} /> : <FaArrowRight size={16} />}
        </span>
      </div>

      <div className={`testimonial-reviews ${expanded ? 'expanded' : ''}`}>
        {visibleReviews.map((review, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-stars">{review.stars}</div>
            <p className="testimonial-text">"{review.text}"</p>
            <span className="testimonial-author">— {review.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials