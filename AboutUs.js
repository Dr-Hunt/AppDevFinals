import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // Make sure to import your CSS file
import Logo from './Grey Sloan Memorial Logo.jpg';
import BackPicture2 from './BG3.1.jpg';
import FrontPicture2 from './Greys2.jpg';
import BedCapacity from './procedures.png';
import Doctors from './user-md.png';
import Employees from './users-alt.png';
import Clinics from './hospital.png';
import Marker from './marker.png';
import Phone from './phonecall.png';
import Envelope from './envelope.png';
import Facebook from './facebook.png';
import Twitter from './twitter.png';
import Instagram from './instagram.png';

function AboutUs() {
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
                <div className="BackPhoto">
                    <img src={BackPicture2} className="back" alt="Background"/>

                    <div className="CompanyProfile">
                        <h1> COMPANY PROFILE </h1>
                    </div>

                    <div className="FrontPhoto">
                        <img src={FrontPicture2} className="front" alt="Front"/>
                    </div>

                    <div className="TheProfile">
                        <p>
                            The hospital was established in 1947. There have been patients that travel across the country to receive the best medical treatment 
                            from the leading surgeons in their field and the hospital is reportedly the best in Washington State. <br/> <br/>

                            After being ranked 12th in top teaching hospitals for a surgical residency program, previously rancked 1st, and being demoted to 
                            Level II Trauma Center, the Chief was determined to do everything in his power to restore the hospital's former glory. Surgical 
                            protocol was changed, more impressive and news grabbing, but risky, surgeries were actively encouraged and as such, was delighted 
                            when Derek and Meredith's clinical trial was featured in a medical journal following its success, being hailed as the Shepherd method. 
                            Although there was much success, some people felt he had changed slightly and was acting recklessly, The hospital then merged to 
                            another hospital Mercy West Medical Center forming the new Seattle Grace-Mercy West Hospital. <br/> <br/>

                            Seattle Grace Hospital and Mercy West Medical Center were originally two separate medical facilities, but in 2009, due to economic 
                            climate, they merged to form one medical facility. Due to the merger and large amount of staff between sites, many employees were 
                            laid-off due to "budgetary constraints" both before and after the merger (notably Dr. Isobel Stevens and Dr. April Kepner). <br/> <br/>

                            Seattle Grace-Mercy West Hospital was a teaching hospital in Seattle, Washington. It was later renamed to Grey-Sloan Memorial Hospital. <br/> <br/>

                            Grey-Sloan Memorial Hospital was formed by the new board of directors, the survivors of the plane crash, plus Callie and Jackson in 
                            Transplant Wasteland when they decided to rename the hospital as part of their new image for the hospital. The name honors the very 
                            reason they have the hospital in the first place and memorializes the two doctors killed in the plane crash, Lexie Grey and Mark Sloan. <br/> <br/>

                            The building has been renamed twice: It was initially Seattle Grace Hospital, then became Seattle Grace-Mercy West Hospital after 
                            merging with Mercy-West Medical Center, and finally renamed Grey-Sloan Memorial Hospital after the plane crash survivors and the Harper 
                            Avery Foundation bought it. <br/> <br/> <br/> <br/> <br/>
                        </p>
                    </div>

                    <div className="GlobalExpertise">
                        <h2> GLOBAL EXPERTISE </h2>
                        <p>
                            <br/> <br/>
                            Just look for the "Grey+Sloan" care whether it is a consultation, family check-up or even surgery, we got you. 
                            <br/> <br/> <br/> <br/>
                        </p>
                    </div>

                    <div className="Numbers">
                        <h2> BY THE NUMBERS </h2>
                        <p>
                            <br/> <br/> 
                            Grey+Sloan Memorial Hospital is designed with hotel-like ambiance <br/>
                            to promote healing and provide highest quality of comfort. In spite of <br/>
                            the fact that mainly for patients, the hospital was also designed with <br/>
                            visiting families and friends in mind.
                        </p>
                    </div>

                    <div className="HospitalFeatures">
                        <div class="Features">
                            <img src={BedCapacity} class="FeatureIcon"/>
                            <div class="infor">
                                <h1> 500 </h1>
                                <h3> Bed Capacity </h3>
                            </div>
                        </div>
                
                        <div class="Features">
                            <img src={Doctors} class="FeatureIcon"/>
                            <div class="infor">
                                <h1> 1024 </h1>
                                <h3> Doctors </h3>
                            </div>
                        </div>
                
                        <div class="Features">
                            <img src={Employees} class="FeatureIcon"/>
                            <div class="infor">
                                <h1> 1503 </h1>
                                <h3> Employees </h3>
                            </div>
                        </div>
                
                        <div class="Features">
                            <img src={Clinics} class="FeatureIcon"/>
                            <div class="infor">
                                <h1> 79 </h1>
                                <h3> Clinics & Hospitals </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* WEBSITE CONTENT ENDS HERE */}

            {/* FOOTER STRUCTURE STARTS HERE */}
            <footer className="footerAboutUs">
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

export default AboutUs;
