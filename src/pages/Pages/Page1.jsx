import React from "react";
import "../Pages/Page1.css";
import Header from "../../components/Header";

export const Page1 = () => {
  return (
    <>
      <Header bg="rgb(243, 243, 243)" />
      <section>
        <div className="page1-sec-1">
          <div className="page1-text">
            <h4>Services</h4>
            <h1>Smart Maintainance & Oprations Management</h1>
          </div>
        </div>
      </section>

      <section className="industry-challange">
        <div className="text-highlight">
          <h1>Industry Challange</h1>
        </div>
        <div className="page1-row">
          <div className="page1-left-col">
            <img src="../image(5).png" alt="" />
          </div>
          <div className="page1-right-col">
            <ul>
              <li>● Silo AD System</li>
              <li>● Poor Equipment Availability</li>
              <li>● Knowledge Retention</li>
              <li>● Reactive MainMaintenance </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="busness-benefit">
        <div className="text-highlight">
          <h1>Business Benefit</h1>
        </div>


        <div className="busness-benefit-row">
          <div className="busness-benefit-left-col">
            <ul>
              <li>● Improved Operational Efficiency</li>
              <li>● Optimised Maintenance Cost</li>
              <li>● Improved productivity with less training effort and cost</li>
              <li>● Reduced number of failures by early detection</li>
            </ul>

          </div>
          <div className="busness-benefit-right-col">
            <img src="../image(5).png" alt="" />
          </div>
          </div>
      </section>

      <section className="digital-solution">
        <div className="text-highlight">
          <h1>Digital Solution</h1>
        </div>
        <div className="page1-row">
          <div className="page1-left-col">
            <img src="../image(5).png" alt="" />
          </div>
          <div className="page1-right-col">
            <ul>
              <li>● Improved Operational Efficiency</li>
              <li>● Optimised Maintenance Cost</li>
              <li>● Improved productivity with less training effort and cost</li>
              <li>● Reduced number of failures by early detection</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="key-feature">
        <div className="text-highlight">
          <h1>Key Feature</h1>
        </div>
        <div className="page1-row">
          <div className="page1-left-col">
            <ul>
              <li>● Improved Operational Efficiency</li>
              <li>● Optimised Maintenance Cost</li>
              <li>● Improved productivity with less training effort and cost</li>
              <li>● Reduced number of failures by early detection</li>
            </ul>

          </div>
          <div className="page1-right-col">
            <img src="../image(5).png" alt="" />
          </div>
        </div>
      </section>

      {/* Footer Section  */}

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
    </>
  );
};
