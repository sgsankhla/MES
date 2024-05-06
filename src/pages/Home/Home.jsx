import React from "react";
import "../Home/Home.css";
import Header from "../../components/Header";
import  Button  from "../../components/Button/Button.jsx";


export const Home = () => {
  return (
    <>
      <Header />

      <section id="home-container">
        <div className="home-row">
          <div className="home-left-col">
            <h1>
              Digital <br /> Manufacturing <br />
              Excellence
            </h1>
            <p>
              We are experts in Manufacturing execution system to optimise
              production processes. We provide efficient, tailored and concrete
              solutions to meet your needs.
            </p> <br /><br />

            <div className="div2"> <a className="home-btn" href="./services">View Our Services</a></div>
          </div>
          <div className="home-right-col">
            <div className="home-text">
              <img src="../image (1).png" alt="homeimg" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-two section-light">
          <h1>Area of Expertise</h1>
          <p>
            We have been experts in manufacturing execution system that
            accelerates production of new products and batches. With an
            unwavering commitment to innovation, we offer tailored solutions fo
            projects of all sizes. From Biopharma, small molecule, consumer
            fhealth, Animal healthcare and nutrition. Our dedicated team works
            tirelessly to deliver cutting-edge results. We are committed to
            shaping a more sustainable and efficient MES
          </p>
        </div>
      </section>


      <section className="section-three section-dark">
        <div className="sec-three-row">
          <div className="sec-three-left-col">
            <h1>Process Optimizations And Harmonization's</h1>
            <h1>Process Control Automations - Discovery To Go Live </h1>
            <h1>MES Design, And Implementation</h1>
            <h1>System Integrations</h1>
            <h1>End To End Validations</h1>
            <h1>
              Digital Transformation Through (Digital <br />
              Maturity Assessment Assessment)
            </h1>
            <h1>Manufacturing IT End to End Solutions</h1>
          </div>
          <div className="sec-three-right-col">
            <img src="../image(2).png" alt="img2" />
          </div>
        </div>
        
      </section>
     

      <section>
        <div className="sec-four-row">
          <div className="sec-four-left-col">
            <img src="../image(3).png" alt="img2" />
          </div>
          <div className="sec-four-right-col">
            <h1>Deep knowledge in the field</h1>
            <p>
              Our extensive experience and deep expertise in the Pharma sector
              have positioned us as innovator in the industry. With decades of
              industrial experience of our team, we have honed our knowledge in
              manufacturing operations transformation, plant automation,
              Enterprise asset management and advance analytics to a level that
              sets us apart. Our team's profound understanding of these domains
              enables us to provide innovative, tailored solutions that not only
              meet but exceed the expectations of our clients.
            </p>

            <button className="trans-bttn">
              Learn More <span>&#8594;</span>{" "}
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="sec-five">
          <h1>Get in touch with us</h1>
          <p>
            If you're ready to explore how our expertise in manufacturing
            operations transformation, plant automation, Enterprise asset
            management and advance analytics, don't hesitate to reach out. We're
            here to listen, collaborate, and provide you with tailored solutions
            that align with your specific needs and goals.
          </p>
        </div>
        <button className="contact"> <a style={{ textDecoration: 'none' }} href="./contactus"> Contact Us</a><span>&#8594;</span>
        </button>
      </section>

      <section className="footer">
        <div className="footer-row">
          <div className="footer-left-col">
            <div class="footer-links">
              <div class="link-title">
                <h4>Pages</h4>
                <a className="pages" href="./services">Services</a>
                <br /><br />
                <a href="./aboutus">About Us</a>
                <br /><br />
                <a href="./Portfolio">Portfolio</a>
                <br /><br />
                <a href="./Contactus">Contact Us</a>
                <br /> <br />
              </div>
              <br />
              <div class="link-title">
                <h4>Social Media</h4>
                <p>
                  {" "}
                  <a href="./">Facebook</a>
                </p>
                <br />
                <p>
                  {" "}
                  <a href="./">Linkedin</a>
                </p>
              </div>
              <br />
              <div class="link-title">
                <h4>Legal</h4>
                <p>
                  {" "}
                  <a href="./">Privacy and Cookies Policy</a>
                </p>
                <br />
                <p>
                  <a href="./">Terms & Conditions </a>
                </p>
              </div> <br /> <br />
            </div>
          </div>

          <div className="footer-right-col">
            <p>Design by MES </p>
          </div>
        </div>

        <p className="copyright-text">MES Consulting@</p>
      </section>


      <section className="faltu">
       
      </section>
    </>
  );
};
