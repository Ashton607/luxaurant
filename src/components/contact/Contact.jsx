import React from 'react'
import './Contact.css'
import { IoLocationOutline, IoTimeOutline, IoCallOutline } from 'react-icons/io5'
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='Contact'>
    
    <div className="contact-content">
    
    <span className="contact-badge">contact</span>

    <p className="contact-subtitle">reserve your food</p>

    <h1 className="contact-title">Contact Us to Reserve Your Order in <span>Douglas</span></h1>

    <p className="contact-subtitle-2">Have a question or want to skip the queue? 
    Drop us a WhatsApp text to secure your meal, or visit us at our pickup point below.</p>

    <div className="left-right">

     <div className="contact-left">
      <p className="contact-left-subtitle">come find us</p>
      <p className="contact-left-subtitle-2">We serve the best food in Douglas. 
        Pop into our shop to order fresh, or text us on WhatsApp to reserve your meals and 
        treats so they’re ready the moment you arrive!</p>

      <div className="location-time">
        <h2><IoLocationOutline/>Location</h2>
        <p>12 Carel Cilliers St,Douglas 8730</p>
        <h2><IoTimeOutline/>Hours</h2>
        <p>Mon-Fri 8:00 am - 17:00 pm</p>
        <p>Sat-Sun 8:00 am - 13:00 pm</p>
      </div>
      <div className="contact-info">
        <h2><IoCallOutline/>Phone</h2>
        <p>+27 778 885 666</p>
        <h2><SiGmail/>Email</h2>
        <p>luxaurant@info.com</p>
        <h2><FaWhatsapp/>WhatsApp</h2>
        <p>0755526999</p>
      </div>
      
     </div>

     <div className="contact-right">
        <h2 className="form-title"><span>Reserve </span>your meal</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Full-Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Contact Details</label>
            <input type="text" placeholder="062 456..." />
          </div>
        </div>

        <div className="form-group">
          <label>Food Order</label>
          <input type="text" placeholder="e.g 2 cheese burgers" />
        </div>


        <div className="form-group">
            <label>Drinks (optional)</label>
            <input type="text" placeholder="e.g 1 chocolate milkshake and 1 vanilla milkshake" />
          </div>

        <div className="form-row">
          <div className="form-group">
            <label>Dessert (optional)</label>
            <input type="text" placeholder="e.g 1 melktert" />
          </div>
        </div>

        <div className="form-group">
          <label>Special Requests</label>
          <textarea placeholder="Dietary requirements, celebrations, seating preferences..." rows={4} />
        </div>

        <button className="form-btn">Order</button>
      </div>
      </div>
      
    </div>
      
    </div>
  )
}

export default Contact
