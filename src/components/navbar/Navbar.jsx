import { useState,useEffect,useRef } from 'react'
import './Navbar.css'
import { Link } from "react-scroll";


const Navbar = () => {
 const [sticky,setSticky] = useState(false)
 const [menuOpen, setMenuOpen] = useState(false);
 const navRef = useRef(null);

  useEffect(() => {
  const handleScroll = () => {
  setSticky(window.scrollY > 0);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll); // cleanup4
  }, []);


  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav  className={`${sticky ? 'blur-nav' : ''}`} ref={navRef}>
    <h2>lux<span>au</span>rant</h2>
      <ul className={menuOpen ? 'show-mobile-menu' : ''}>
        <li><Link to="Hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="Menu" smooth={true} duration={500}>Menu</Link></li>
        <li><Link to="Testimonials" smooth={true} duration={500}>Testimonials</Link></li>
        <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <div
        className={`menu-icon ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        role="button"
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  )
}

export default Navbar
