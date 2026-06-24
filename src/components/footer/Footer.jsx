import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className='Footer'>

      {/* top divider */}

      <div className="footer-content">

        {/* Brand */}
        <div className="footer-brand">
          <h2>lux<span>au</span>rant</h2>
          <p>Aged to perfection, seared with passion —
            every cut tells a story of flavour, fire,
            and fine dining.
          </p>
          <div className="footer-socials">
            <FaInstagram size={18} />
            <FaFacebook size={18} />
            <FaTiktok size={18} />
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div className="footer-col">
          <h3>Hours</h3>
          <ul>
            <li>Mon–Thu 5:00pm – 10:00pm</li>
            <li>Fri–Sat 5:00pm – 11:00pm</li>
            <li>Sun 4:00pm – 9:00pm</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li><IoLocationOutline size={14} /> 12 Luxury Drive, Johannesburg</li>
            <li><IoCallOutline size={14} /> +27 778 885 666</li>
            <li><IoMailOutline size={14} /> luxaurant@info.com</li>
          </ul>
        </div>

      </div>

      {/* bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Luxaurant. All rights reserved.</p>
        <p className="footer-credit">
          <a href="https://ashton607.github.io/Lux/" target="_blank" rel="noopener noreferrer">
          Made with Lux</a></p>
      </div>

    </footer>
  )
}

export default Footer