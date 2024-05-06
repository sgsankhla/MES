import React from 'react'
import "../ContactUs/ContactUs.css";
import Header from '../../components/Header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import GoogleMapReact from 'google-map-react';




const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const ContactUs = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
return (
    <section>
      <Header  bg="#ecebeb"/>
      <section>
        <div className="contact-sec-1">
          <div className="contact-text">
            <h1>Contact Us</h1>
            <p>
              Our team is here to assist you on your journy towords a sustanable <br />
              and efficient MES
            </p>
          </div>
        </div>
      </section>


      {/* Contact-Us Form  */}
      <section>
        <div className="contact-row">
          <div className="contact-left-col">
            <h1>Location </h1>
            <h5>Avenida Marta Lopes.N02
              <br />
              8400-401 Vila Real,
            </h5>
            <br /><br />
            <h1>Open Hours </h1>
            <h5>Avenida Marta Lopes.N02
              <br />
              8400-401 Vila Real,
            </h5>
          </div>

          <div className="contact-right-col">
            <h1>Form</h1>
            <form action="" label="form">
              <div className="inputs">
              <Box component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25rem ' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <br />
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                <TextField id="outlined-basic" label="Company(Optional)" variant="outlined" />
                <br />
                <TextareaAutosize style={{ width: "51rem", height: "10rem" }} placeholder="Message" />
                
                <br /><br />  
              </Box>
          </div>
              <div className="checkbox">
                <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" />
                <label> I consent Digixion to processing my data for contact purpose</label><br /><br />
                <button className='send-btn'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>

 

      {/* Google Map */}

      <section>
        <div id="map" style={{ height: '80vh', width: '65%' ,marginTop:'10%',marginBottom:"20%" }}>
    
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </section>
      
      {/* Footer Section */}

      <section className="footer">
        <div className="footer-row">
          <div className="footer-left-col">
            <div class="footer-links">
              <div class="link-title">
                <h4>Pages</h4>

                <a className="pages" href="./services">Services</a><br /><br />
                <a href="./aboutus">About Us</a><br /><br />
                <a href="./Portfolio">Portfolio</a><br /><br />
                <a href="./Contactus">Contact Us</a><br /><br />


              </div>
              <br />
              <div class="link-title">
                <h4>Social Media</h4>
                <p> <a href="./">Facebook</a></p><br />
                <p> <a href="./">Linkedin</a></p>
              </div>
              <br />
              <div class="link-title">
                <h4>Legal</h4>

                <p> <a href="./">Privacy and Cookies Policy</a></p><br />
                <p><a href="./">Terms & Conditions </a></p>
              </div>
              <br /><br />
            </div>
          </div>

        </div>
        

      </section>
    </section>
  )
}
