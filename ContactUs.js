import React from 'react';
import './ContactUs.css'; // Make sure to import your CSS file
import { Link } from 'react-router-dom';
import Logo from './Grey Sloan Memorial Logo.jpg';
import BackPicture1 from './BG3.1.jpg';
import FrontPicture1 from './Grey Sloan.jpg';
import Marker from './marker.png';
import Phone from './phonecall.png';
import Envelope from './envelope.png';
import Facebook from './facebook.png';
import Twitter from './twitter.png';
import Instagram from './instagram.png';
import './FindADoctor.js';
import './ContactUs.js';

function ContactUs() {
    return (
        <div>
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
            <main>
                <div className="BackPhoto1">
                    <img src={BackPicture1} className="back1" alt="Background"/>

                    <div className="ContactUs">
                        <h1> CONTACT US </h1>
                    </div>

                    <div className="FrontPhoto1">
                        <img src={FrontPicture1} className="front1" alt="Grey Sloan"/>
                    </div>
                    
                        <div className="FirstRow">
                            <input type="text" className="FirstRowInput" placeholder="Last Name" name="LastName"/>
                            <input type="text" className="FirstRowInput" placeholder="First Name" name="FirstName"/>
                            <input type="text" className="FirstRowInput" placeholder="Middle Name" name="MiddleName"/>
                        </div>

                        <div className="SecondRow">
                            <input type="email" className="SecondRowInput" placeholder="Email" name="Email"/>
                            <input type="tel" className="SecondRowInput" placeholder="Phone Number" name="PhoneNumber"/>
                            <input type="tel" className="SecondRowInput" placeholder="Telephone Number" name="TelephoneNumber"/>
                        </div>

                        <div className="ThirdRow">
                            <select name="Inquiry" id="Inquiry" className="Inquiry" >
                                <option value="" disabled selected> Inquiry </option>
                                <option value="Service Inquiry"> Service Inquiry </option>
                                <option value="Doctor's Appointment"> Doctor's Appointment </option>
                                <option value="Complaint"> Complaint </option>
                                <option value="Commendation"> Commendation </option>
                                <option value="Packages"> Packages </option>
                            </select>  
                        </div>

                        <div className="FourthRow">
                            <textarea className="YourMessage" placeholder="Your Message" name="Message"></textarea>
                        </div>

                        <div className="Toggle">
                            <label className="Switch">
                                <input type="Checkbox" name="Behalf"/>
                                <span className="Slider"></span>
                            </label>
                            <p> Inquiring on others behalf. </p>
                        </div>

                        <div className="LocalorForeign">
                            <p> Are you local of foreign? </p>
                            <input type="radio" id="Local" value="Local" name="Nationality" required/>
                            <label htmlFor="Local">Local</label>

                            <input type="radio" id="Foreign" value="Foreign" name="Nationality"/>
                            <label htmlFor="Foreign">Foreign</label>
                        </div>

                        <div className="SubmitPart">
                            <input type="submit" className="Submit" value="Submit" name="Submit"/>
                        </div>
                  
                </div>
            </main>
            {/* WEBSITE CONTENT ENDS HERE */}

            {/* FOOTER STRUCTURE STARTS HERE */}
            <footer className="footerContactUs">
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

export default ContactUs;
