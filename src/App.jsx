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
          <h2> | From Model to Field Execution</h2>
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

      <div className="hook-statement">
        <div className="hook-head-container">
          <div className="hook-heading">
            <h1>Built for Contractors. Driven by the Field.</h1>
          </div>

        <div className="value-prop-container">
          <div className="prop-card pain">
            <small>The Status Quo</small>
            <h3>Most BIM firms stop at coordination.</h3>
          </div>

          <div className="prop-card gain">
            <small>The SHD Advantage</small>
            <h3>We bridge the gap from modeling to field-ready installation.</h3>
            <p>Delivering packages that reduce labor, eliminate guesswork, and maximize prefabrication.</p>
          </div>
        </div>

        </div>

        <div className="portfolio-piece-1">
          <div className="portfolio-text">
            <h2><i>Portfolio Design Name</i></h2>
            <p>Case study & information about the project</p>
          </div>
          <div className="portfolio-piece-1-image">
            <img src={sampleImage} />
          </div>
        </div>

        <div className="approach-grid">
          <section className="problems-we-solve">
            <h2 className="problems-we-solve-header section-header">The Problems We Solve</h2>
            <div className="deliv-card-blue">
                <ul>
                  <li>Crews waiting on incomplete or unclear information</li>
                  <li>Material waste and filed re-handling</li>
                  <li>Limited prefabrication due to lack of detail</li>
                  <li>Rework caused by coordination gaps</li>
                  <li>Disconnect between BIM and field execution</li>
                </ul>
              </div>
          </section>

          <section className="our-approach">
            <h2 className="our-approach-header section-header">Our Approach</h2>
            <div className="deliv-card-blue">
              <p>We turn coordinated models into <strong>install-ready deliverables</strong> aligned with how work actually gets built</p>
              <p><strong>Model → Spool → Prefabricate → Install</strong></p>
              <p>Every output is designed to support <strong>production, not just visualization</strong></p>
            </div>
          </section>
        </div>

        <section className="deliverables">
          <h2 className="core-deliverables-text section-header">Core Deliverables</h2>
          <div className="grid">
            <div className="deliv-card">
              <h3>Field-Ready BOMs</h3>
              <ul>
                <li>Install package-specific lists</li>
                <li>Spool-level quantity breakdowns</li>
                <li>Zone-based organization</li>
                <li>Supports kitting, staging, and tracking</li>
              </ul>
              <p className="list-ending"><strong>Material shows up ready to install, not sorted in the field</strong></p>
            </div>

            <div className="deliv-card">
              <h3>Prefabrication Packages</h3>
              <ul>
                <li>Conduit reack & trapeze drawings</li>
                <li>Assembly sheets with dimensions and tolerances</li>
                <li>Kit-of-parts definitions</li>
                <li>Labor-aligned detailing for shop production</li>
              </ul>
              <p className="list-ending"><strong>We define how it's built, not just how it looks</strong></p>
            </div>

            <div className="deliv-card">
              <h3>Spooling & Installation Drawings</h3>
              <ul>
                <li>Area and system-based spooling</li>
                <li>Clear, field-friendly layouts</li>
                <li>Install sequencing support</li>
                <li>Minimized field measuring</li>
              </ul>
              <p className="list-ending"><strong>Crews install with confidence, not interpretation</strong></p>
            </div>

            <div className="deliv-card">
              <h3>AWP-Aligned Work Packaging</h3>
              <ul>
                <li>Supports Workface Planning (WFP)</li>
                <li>Installation Work Packages (IWPs)</li>
                <li>Constraint-free, executable scopes</li>
              </ul>
              <p className="list-ending"><strong>Every model output feeds a planned work package</strong></p>
            </div>
          </div>
        </section>

        <div className="approach-grid">
            <section className="problems-we-solve">
              <h2 className="problems-we-solve-header section-header">Why SHD</h2>
              <div className="deliv-card-blue">
                  <ul>
                    <li><strong>Field-First Mindset</strong> - Built from real prefab and VDC leadership experience</li>
                    <li><strong>Production-Focused</strong> - We prioritize labor savings and install efficiency</li>
                    <li><strong>Prefab-Driven</strong> - Maximize offsite construction opportunities</li>
                    <li><strong>Execution-Oriented</strong> - Deliverables designed for the people doing the work</li>
                  </ul>
                </div>
            </section>

            <section className="our-approach">
              <h2 className="our-approach-header section-header">The Result</h2>
              <div className="deliv-card-blue">
                <ul>
                  <li>Reduced labor hours</li>
                  <li>Increased prefab utilization</li>
                  <li>Improved schedule reliability</li>
                  <li>Less field rework</li>
                  <li>Better material control</li>
                </ul>
              </div>
            </section>
          </div>

        <div className="closing">
          <div className="cta">
           <h2>Let's Build Smarter</h2>
           <p>If your goal is to <strong>reduce field labor, increase prefab, and execute with precision</strong>, we're built to support you.</p>
          </div>

          <div className="signature">
            <h3>SHD Virtual Construction Partners</h3>
            <p><i>From Model to Field Execution</i></p>
          </div>
        </div>
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