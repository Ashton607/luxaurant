import { useState,useEffect } from 'react'
import './Navbar.css'
import { Link } from "react-scroll";


const Navbar = () => {
 const [sticky,setSticky] = useState(false)

  useEffect(() => {
  const handleScroll = () => {
  setSticky(window.scrollY > 0);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll); // cleanup4
  }, []);


  return (
    <nav  className={`${sticky ? 'blur-nav' : ''}`}>
    <h2>lux<span>au</span>rant</h2>
      <ul>
        <li><Link to="Hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="Menu" smooth={true} duration={500}>Menu</Link></li>
        <li><Link to="Testimonials" smooth={true} duration={500}>Testimonials</Link></li>
        <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
