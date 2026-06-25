import { useState, useRef } from 'react'
import logo from './assets/shd_virtual_construction_logo.jpg';
import sampleImage from './assets/sample-image.jpg';
import sampleImage2 from './assets/sample-image-2.jpg';
import sampleImage3 from './assets/sample-image-3.jpg';
import linkedinLogo from './assets/LinkedIn.svg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const trackRef = useRef(null);

  const handleScroll = (direction) => {
    if (trackRef.current) {
      const track = trackRef.current;
      const slideWidth = track.clientWidth; 

      if (direction === 'next') {
        if (track.scrollLeft + slideWidth >= track.scrollWidth - 5) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: slideWidth, behavior: 'smooth' });
        }
      } else if (direction === 'prev') {
        if (track.scrollLeft <= 5) {
          track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="./">
            <img src={logo} width='120px' />
          </a>
        </div>
        
        <div className="title">
          <a href="./">
            SHD Virtual Construction Partners
          </a>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>

        <div className={`navbar ${isMenuOpen ? 'show' : ''}`}>
          <nav>
            <p>Placeholder</p> 
            <p className="divider">|</p>
            <p>Placeholder</p>
            <p className="divider">|</p>
            <p>Placeholder</p>
            <p className="divider">|</p>
            <p>Placeholder</p>
          </nav>
        </div>
      </div>

      <div className="overview">
        <h1>Overview</h1>
        <p className="overview-text">SHD Virtual Construction Partners is a BIM and virtual construction firm focused on delivering fast, 
          accurate, and constructable digital solutions that support real-world building. 
          <br />
          <br />
          We partner with owners, designers, and contractors to bring clarity to complex projects through BIM, VDC, and model-based workflows. 
          <br />
          Our work is grounded in practical construction knowledge and focused on delivering information that can be trusted in the field.
          <br />
          <br />
          Our approach is built on three core principles:
          <br />
          <br />
          Fast – Efficient workflows that accelerate coordination and decision-making
          <br />
          Accurate – Precise, reliable models that reduce risk and rework
          <br />
          Constructable – Digital deliverables aligned with real construction means and methods
          <br/>
          <br />
          By prioritizing speed, accuracy, and constructability, SHD Virtual Construction helps teams plan, coordinate, and build with confidence</p>
      </div>

      <h1 className="carousel-header">Sample</h1>

      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          
          <div className="slide">
            <img src={sampleImage} alt="Slide 1" />
            <div className="carousel-controls">
              <button onClick={() => handleScroll('prev')} className="prev-btn">❮</button>
              <button onClick={() => handleScroll('next')} className="next-btn">❯</button>
            </div>
          </div>

          <div className="slide">
            <img src={sampleImage2} alt="Slide 2" />
            <div className="carousel-controls">
              <button onClick={() => handleScroll('prev')} className="prev-btn">❮</button>
              <button onClick={() => handleScroll('next')} className="next-btn">❯</button>
            </div>
          </div>

          <div className="slide">
            <img src={sampleImage3} alt="Slide 3" />
            <div className="carousel-controls">
              <button onClick={() => handleScroll('prev')} className="prev-btn">❮</button>
              <button onClick={() => handleScroll('next')} className="next-btn">❯</button>
            </div>
          </div>

        </div>
      </div>

      <div className="spacer"></div>

      <div className="footer">
        <div className="socials">
          <p>Follow us on Social Media!</p>
          <a href="https://www.linkedin.com/company/shd-virtual-construction">
            <img src={linkedinLogo} width="50px" />
          </a>
        </div>

        <div className="copyright">
          <p>© 2026 SHD Virtual Construction Partners LLC</p>
        </div>

        <div className="contact">
          <p>Address</p>
          <p>Lexington, KY</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </div>
    </>
  )
}

export default App