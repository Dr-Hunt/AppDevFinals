import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to import your CSS file
import Logo from './Grey Sloan Memorial Logo.jpg';
import Marker from './marker.png';
import Phone from './phonecall.png';
import Envelope from './envelope.png';
import Facebook from './facebook.png';
import Twitter from './twitter.png';
import Instagram from './instagram.png';
import Background from './BG.png';
import './FindADoctor.js';
import './ContactUs.js';

function App() {
  return (
    <div className="App">
      {/* HEADER STRUCTURE STARTS HERE */}
      <header className="header">

        <Link to="/">
        <img src={Logo} class="HeaderLogo"/>
        </Link>

            <nav class="navbar">
      
              <Link to="FindADoctor">
                FIND A DOCTOR
              </Link>

              <Link to="ContactUs">
                CONTACT US
              </Link>

              <Link to="AboutUs">
                ABOUT US
              </Link>

            </nav>
      </header>
      {/* HEADER STRUCTURE ENDS HERE */}

      {/* WEBSITE CONTENT STARTS HERE */}
      <main className="content">
        <div className="BGImage">

            <img src={Background} alt="Background Image" className="BG" />
        </div>
        {/* Add your main content here */}
      </main>
      {/* WEBSITE CONTENT ENDS HERE */}

      {/* FOOTER STRUCTURE STARTS HERE */}
      <footer className="footerHome">
        <div className="FooterFirstColumn">
          <div className="FooterLogoSection">
            <div className="FooterIcon">
              <img src={Logo} alt="Logo" className="FooterLogo" />
            </div>
          </div>
      <div className="FooterIcon">
        <img src={Marker} alt="Marker" className="FooterFirstColumnIcon" />
        <p>15000 Centennial Drive<br />Seattle, Washington 98109</p>
      </div>
      <div className="FooterIcon">
        <img src={Phone} alt="Phone" className="FooterFirstColumnIcon" />
        <p>(206) 555-600</p>
      </div>
      <div className="FooterIcon">
        <img src={Envelope} alt="Envelope" className="FooterFirstColumnIcon" />
        <p>mail@greysloanmemorial.com</p>
      </div>
    </div>

    <div className="FooterColumn">
      <h3>SERVICES</h3>
      <ul>
        <li> <a href="#">A Doctor</a></li>
        <li> <a href="#">Our Institute</a> </li>
        <li> <a href="#">Our Foundation</a> </li>
        <li> <a href="#">Price List</a> </li>
      </ul>

      <h3>ABOUT US</h3>
      <ul>
        <li> <a href="#">About the Grey Sloan Memorial Hospital</a></li>
        <li> <a href="#">Corporate Profile</a></li>
        <li> <a href="#">Mission and Vision</a></li>
        <li> <a href="#">Core Values</a></li>
        <li> <a href="#">Board of Directors</a></li>
        <li> <a href="#">Quality and Safety</a></li>
      </ul>
    </div>

    <div className="FooterColumn">
      <h3>OUR NETWORK</h3>
      <ul>
        <li> <a href="#">Grey-Sloan Memorial Hospital</a></li>
        <li> <a href="#">Seattle Grace Hospital</a></li>
        <li> <a href="#">Mercy West Medical Center</a></li>
        <li> <a href="#">Seattle Presbyterian</a></li>
        <li> <a href="#">Klausman Institute for Medical Research</a></li>
        <li> <a href="#">Pacific Northwest General Hospital</a></li>
        <li> <a href="#">Mayo Clinic</a></li>
      </ul>

      <h3>ONLINE SERVICES</h3>
      <ul>
        <li> <a href="#">Online Screening</a></li>
        <li> <a href="#">Online Checkup</a></li>
        <li> <a href="#">TeleConsultation Services</a></li>
        <li> <a href="#">Online HMO</a></li>
      </ul>
    </div>

    <div className="FooterColumn">
      <h3>LATEST NEWS</h3>
      <ul>
        <li> <a href="#">News and Health Articles</a></li>
        <li> <a href="#">Harper Avery Awardees and Nominees</a></li>
        <li> <a href="#">From the Desk of Board of Directors</a></li>
      </ul>

      <h3>CONNECT</h3>
      <ul>
        <li> <a href="https://www.facebook.com/p/GreySloan-Memorial-Hospital-100054217642439/"> <img src={Facebook} alt="Facebook" className="SocialIcon" /> Grey Sloan Memorial Hospital </a> </li>
        <li> <a href="https://twitter.com/gsm_bloxburg?lang=en"> <img src={Twitter} alt="Twitter" className="SocialIcon" /> @GreySloanMemorialHospital </a> </li>
        <li> <a href="https://www.instagram.com/greysmemorialhospital/?hl=en"> <img src={Instagram} alt="Instagram" className="SocialIcon" /> @GreySloanMemorialHospital</a> </li>
      </ul>
    </div>
      </footer>
      {/* FOOTER STRUCTURE ENDS HERE */}
    </div>
  );
}

export default App;