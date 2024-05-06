import React from 'react'
import "../Services/Services.css";
import Header from '../../components/Header';
import { NavLink } from 'react-router-dom';

export function Services() {
  return (
    <>
     
        <Header bg="#1d1d1d" color="white"/>
        <section>
        <div className="services-sec-1">
          <div className="text">
            <h1>Services </h1>
            <p>Discover our comprehensive ranges of services tailored to meet your <br />
              requirement and much more</p>
          </div>
        </div>
    

      <div className="card-container">
        <div className="card-row">
          <div className="cards">
            <img src="../icons8.png" alt="icon" />
            <h4>Start Mantainance and Oprating Management</h4>
            <p>By initiating maintenance and operating management, you can ensure the smooth 
              functioning of your systems and equipment.Start prioritizing maintenance and operations 
              for a more efficient and reliable system.</p>
            <button><a href="./page1">Show More</a></button>
          </div>
          <div className="cards">
            <img src="../icons9.png" alt="icon" />
            <h4>Digi Concept on Manufacturing Cockpit</h4>
            <p>It is an advanced software 
              solution that helps manufacturers optimize production processes. 
              It provides real-time data visualization & analytics, enabling manufacturers
               to monitor & make 
               informed decisions that improve efficiency & reduce costs.</p>
            <button><a href="./page1">Show More</a></button>
          </div>
          <div className="cards">
            <img src="../icons80.png" alt="icon" />
            <h4>Digi Capabilities in OSI PI </h4>
            <p>Maximize your organization's potential! Gain a competitive edge with OSI PI's cutting-edge digital capabilities. Let's explore the possibilities of what OSI PI can do for you and your business.</p>
            <button><a href="./page1">Show More</a></button>
          </div>
        </div>

        <div className="card-row">
          <div className="cards">
            <img src="../icons1.png" alt="icon" />
            <h4>Anaylitics Experiences driving Manufacturing Excellinence</h4>
            <p>Transform your manufacturing process with the power of analytics experiences. Discover the key to driving manufacturing excellence and unlock your business's full potential today.</p>
            <button><a href="./page1">Show More</a></button>
          </div>
          <div className="cards">
            <img src="../icons8.png" alt="icon" />
            <h4>Start Mantainance and Oprating Management</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magnam sint dolore exercitationem earum ab facilis et laboriosam,
              quae vitae. Pariatur ea tempore commodi non dolor esse quo voluptate
              eum est.</p>
            <button><a href="./page1">Show More</a></button>
          </div>
        </div>
      </div> 
      </section>

     {/* <section>
      <div className="services-sec-2">
        <hr />
        <h1> <a href="./page1">Start Mantainance and Oprating Management</a> <span>🠫</span></h1>
        <hr />
        <h1> <a href="./page1">Digi Concept on Manufacturing Cockpit</a>  <span>🠫</span></h1>
        <hr />
          <h1> <a href="./page1">Digi Capabilities in OSI PI </a> <span>🠫</span></h1>
        <hr />
          <h1> <a href="./page1">Anaylitics Experiences driving Manufacturing Excellinence  </a><span>🠫</span></h1>
      </div>
     </section>  */}
     
     <section>
      <div className="service-image">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="../test.jpg" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="../image (1).png" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="../image(4).png" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
      </div>
     </section> 

      <section className="footer-service">
        <div className="footer-row">
          <div className="footer-left-col">
            <div className="footer-links">
              <div className="link-title">
                <h4>Pages</h4>

                <a className="pages" href="./services">Services</a><br /><br />
                <a href="./aboutus">About Us</a><br /><br />
                <a href="./">Portfolio</a><br /><br />
                <a href="./Contactus">Contact Us</a><br /><br />
              </div>
              <br />
              <div className="link-title">
                <h4>Social Media</h4>
                <p> <a href="./">Facebook</a></p><br />
                <p> <a href="./">Linkedin</a></p>
              </div>
              <br />
              <div className="link-title">
                <h4><a href="./">Legal</a></h4>
                <p> <a href="./">Privacy and Cookies Policy</a></p><br />
                <p><a href="./">Terms & Conditions </a></p>
              </div>
              <br /><br />
            </div>
          </div>
           </div>
      </section>
    </>
  )
}

