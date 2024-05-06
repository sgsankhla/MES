import React from "react";
import "../AboutUs/AboutUs.css";
import Header from "../../components/Header";

export const AboutUs = () => {
  return (
    <>
      <Header bg="#ecebeb" color="" />

      <section>
        <div className="about-sec-1">
          <div className="about-text">
            <h1>About Us</h1>
            <p>
              Learn more about Digixion and our commitments to excellence,
              innovation, and <br />
              sustainbility.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="about-row">
          <div className="about-left-col">
            <h1>
              Digital Innovation. <br />
              Guiding our journey from the start.
            </h1>
          </div>

          <div className="about-right-col">
              <img src="../meeting2.jpg" alt=""></img>
          </div>
        </div>
      </section>

      {/* Text Section-1 */}
      <section>
        <div className="about-sec-3">
          <div className="about-text">
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
          </div>
        </div>
      </section>
      {/* Image Section */}
      <section>
        <div className="about-image">
          <div className="overlay">
            <h1>Building the future of Digital Innovation</h1>
          </div>
        </div>
      </section>

      {/* Text Section-2 */}

      <section>
        <div className="about-sec-5">
          <div className="about-text-2">
            <p>
              Our extensive experience and deep expertise in the Pharma sector have
              positioned us as innovator in the industry. With decades of industrial
              experience of our team, we have honed our knowledge in manufacturing
              operations transformation, piant automation, Enterprise asset management
              and advance analytics to a level that sets us apart. Our team's profound
              understanding of these domains enables us to provide innovative, tailored
              solutions that not only meet but exceed the expectations of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section  */}

      <section className="footer">
        <div className="footer-row">
          <div className="footer-left-col">
            <div className="footer-links">
              <div className="link-title">
                <h4>Pages</h4>

                <a className="pages" href="./services">
                  Services
                </a>
                <br />
                <br />
                <a href="./aboutus">About Us</a>
                <br />
                <br />
                <a href="./Portfolio">Portfolio</a>
                <br />
                <br />
                <a href="./Contactus">Contact Us</a>
                <br />
                <br />
              </div>
              <br />
              <div className="link-title">
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
              <div className="link-title">
                <h4>Legal</h4>

                <p>
                  {" "}
                  <a href="./">Privacy and Cookies Policy</a>
                </p>
                <br />
                <p>
                  <a href="./">Terms & Conditions </a>
                </p>
              </div>
              <br />
              <br />
            </div>
          </div>

          <div className="footer-right-col">
            <p>Design by </p>
          </div>
        </div>
        <p className="copyright-text">MES Consulting@</p>
      </section>
    </>
  );
};
