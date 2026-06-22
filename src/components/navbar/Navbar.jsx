import { useState,useEffect } from 'react'
import './Navbar.css'

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
        <li>Home</li>
        <li>Menu</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
