import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FindADoctor.css'; // Import your CSS file
import './FindADoctor.js';
import './ContactUs.js';
import Logo from './Grey Sloan Memorial Logo.jpg';
import Sunrise from './Sunrise2.jpg';
import Meredith from './Meredith.jpg';
import Alex from './Alex.jpg';
import Cristina from './Cristina_Yang.jpg';
import Miranda from './Dr._Miranda_Bailey.jpg';
import Owen from './Dr._Owen_Hunt.jpg';
import Derek from './Dr._Derek_Shepherd.jpg';
import Arizona from './Dr._Arizona_Robbins.jpg';
import Callie from './CallieTorres.jpg';
import Richard from './Dr._Richard_Webber.jpg';
import April from './April_Kepner.jpg';
import Amelia from './Amelia_Shepherd_temporada_16.jpg';
import Maggie from './MaggiePierce.jpg';
import Teddy from './teddy altman.jpg';
import Catherine from './catherine avery.jpg';
import Jackson from './Jesse-williams-greys.jpg';
import Jo from './Jo_Wilson.jpg';
import Marker from './marker.png';
import Phone from './phonecall.png';
import Envelope from './envelope.png';
import Facebook from './facebook.png';
import Twitter from './twitter.png';
import Instagram from './instagram.png';


const App = () => {
  const [specialization, setSpecialization] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSpecializationChange = (event) => {
    setSpecialization(event.target.value);
    // Additional logic if needed
  };

  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
    // Additional logic if needed
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    // Additional logic if needed
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    // Additional logic if needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for form submission
  };

  

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

        <div className="HeadPhoto">
            <img src={Sunrise} class="FindADoctorPhoto"/>

            <div className="FindADoctor">
                <h2> FIND A DOCTOR </h2>
            </div>

            <div className="SearchFor">
                <p> Search more than 200 doctors and schedule an appointment online </p>
            </div>
        </div>

        <div className="ScheduleContainer">
            <form onSubmit={handleSubmit}>
            <div class="SecondLine">

            <div className="SecondLineColumn1">
                <div className="SecondLineHeading">
                    <p> SPECIALIZATION </p>
                </div>

                <select name="Specialization" id="Specialization" className="DoctorName" onchange="updateDoctors()" required>
                    <option value="" disabled selected> Specialization </option>
                    <option value="General Surgery"> General Surgery </option>
                    <option value="Pediatric Surgery"> Pediatric Surgery </option>
                    <option value="Cardiothoracic Surgery"> Cardiothoracic Surgery </option>
                    <option value="Trauma Surgery"> Trauma Surgery </option>
                    <option value="Neurosurgery"> Neurosurgery </option>
                    <option value="Fetal Surgery"> Fetal Surgery </option>
                    <option value="Orthopedic Surgery"> Orthopedic Surgery </option>
                    <option value="Urology Surgery"> Urology Surgery </option>
                    <option value="Plastic Surgery"> Plastic Surgery </option>
                    <option value="OB/GYN/Neonatal Surgery"> OB/GYN/Neonatal Surgery </option>
                    <option value="OB/GYN"> OB/GYN </option>
                    <option value="Surgical Resident"> Surgical Resident </option>
                    <option value="Surgical Intern"> Surgical Intern </option>
                </select>
            </div>

            <div className="SecondLineColumn1">
                <div className="SecondLineHeading">
                    <p> DOCTOR </p>
                </div>

                <select name="Doctor" id="Doctor" className="DoctorName" required>
                    <option value="" disabled selected> Doctor </option>
                </select>
            </div>

            <div className="SecondLineColumn2">
                <div className="SecondLineHeading">
                    <p> DATE </p>
                </div>
                <input type="date" className="Date" name="Date" id="Date" required/>
            </div>

            <div className="SecondLineColumn3">
                <div className="SecondLineHeading">
                    <p> TIME </p>
                </div>

                <select name="Time" id="Time" className="Time" required>
                    <option value="" disabled selected> Time </option>
                    <option value="8:00"> 8:00 </option>
                    <option value="8:30"> 8:30 </option>
                    <option value="9:00"> 9:00 </option>
                    <option value="9:30"> 9:30 </option>
                    <option value="10:00"> 10:00 </option>
                    <option value="10:30"> 10:30 </option>
                    <option value="11:00"> 11:00 </option>
                    <option value="11:30"> 11:30 </option>
                    <option value="12:00"> 12:00 </option>
                    <option value="12:30"> 12:30 </option>
                    <option value="13:00"> 13:00 </option>
                    <option value="13:30"> 13:30 </option>
                    <option value="14:00"> 14:00 </option>
                    <option value="14:30"> 14:30 </option>
                    <option value="15:00"> 15:00 </option>
                    <option value="15:30"> 15:30 </option>
                    <option value="16:00"> 16:00 </option>
                    <option value="16:30"> 16:30 </option>
                    <option value="17:00"> 17:00 </option>
                </select>  
            </div>

            <div className="SecondLineColumn4">
                <div className="SecondLineHeading">
                    <p> &nbsp; </p>
                </div>
                <input type="submit" className="Submit" value="Book" name="Search"/>
            </div>
            </div>
          </form>
        </div>

        <div className="parentrow">
          <div class="doccard">
            <div class="docphotocontainer">
              <img src={Meredith} class="docphoto"/>
              <h3>Dr. Meredith Grey</h3>
              <br/>
              <p>
                Specialization:<b> General Surgery </b>
                <br/>
                <br/>
                Chief of General Surgery
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                360-219-8805
                <br/>
                MeredithGrey@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
              </p>
            </div>
          </div>

          <div class="doccard">
            <div class="docphotocontainer">
              <img src={Alex} class="docphoto"/>
              <h3> Dr. Alex Karev </h3>
              <br/>
              <p>
                Specialization:<b> Pediatric Surgery </b>
                <br/>
                <br/>
                Chief of Pediatric Surgery
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                206-392-6324
                <br/>
                AlexKarev@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
              </p>
            </div>
          </div>

          <div class="doccard">
            <div class="docphotocontainer">
              <img src={Cristina} class="docphoto"/>
              <h3>Dr. Cristina Yang</h3>
              <br/>
              <p>
                Specialization:<b>Cardiothoracic Surgery</b>
                <br/>
                <br/>
                Chief of Cardiothoracic Surgery
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                206-849-6195
                <br/>
                CristinaYang@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
              </p>
            </div>
          </div>

          <div class="doccard">
            <div class="docphotocontainer">
              <img src={Miranda} class="docphoto"/>
              <h3>Dr. Miranda Bailey</h3>
              <br/>
              <p>
                Specialization:<b>General Surgery</b>
                <br/>
                <br/>
                Chief of Surgery
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                206-231-4789
                <br/>
                MirandaBailey@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
              </p>
            </div>
          </div>
        </div>

        <div class="parentrow">
    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Owen} class="docphoto"/>
            <h3>Dr. Owen Hunt</h3>
            <br/>
            <p>
                Specialization:<b>Trauma Surgery</b>
                <br/>
                <br/>
                Chief of Truama Surgery
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                360-606-7630
                <br/>
                OwenHunt@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>

    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Derek} class="docphoto"/>
            <h3>Dr. Derek Shepherd</h3>
            <br/>
            <p>
                Specialization:<b>Neurosurgery</b>
                <br/>
                <br/>
                Chief of Neurosurgery
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                215-230-9785
                <br/>
                DerekShepherd@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>

    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Arizona} class="docphoto"/>
            <h3>Dr. Arizona Robbins</h3>
            <br/>
            <p>
                Specialization:<b>Fetal Surgery</b>
                <br/>
                <br/>
                Chief of Fetal Surgery
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                154-460-2010
                <br/>
                ArizonaRobbins@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>

    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Callie} class="docphoto"/>
            <h3>Dr. Callie Torres</h3>
            <br/>
            <p>
                Specialization:<b>Orthopedic Surgery</b>
                <br/>
                <br/>
                Chief of Orthopedic Surgery
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                497-562-2304
                <br/>
                CallieTorres@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>
</div>

<div class="parentrow">
    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Richard} class="docphoto"/>
            <h3>Dr. Richard Webber</h3>
            <br/>
            <p>
                Specialization:<b>General Surgery</b>
                <br/>
                <br/>
                General Surgeon
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                154-487-5020
                <br/>
                RichardWebber@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>

    <div class="doccard">
        <div class="docphotocontainer">
            <img src={April} class="docphoto"/>
            <h3>Dr. April Kepner</h3>
            <br/>
            <p>
                Specialization:<b>Trauma Surgery</b>
                <br/>
                <br/>
                Trauma Surgeon
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                058-446-2305
                <br/>
                AprilKepner@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>

    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Amelia} class="docphoto"/>
            <h3>Dr. Amelia Shepherd</h3>
            <br/>
            <p>
                Specialization:<b>Neurosurgery</b>
                <br/>
                <br/>
                Neurosurgeon
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                206-416-2065
                <br/>
                AmeliaShepherd@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>

    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Maggie} class="docphoto"/>
            <h3>Dr. Maggie Pierce</h3>
            <br/>
            <p>
                Specialization:<b>Cardiothoracic Surgery</b>
                <br/>
                <br/>
                Cardiothoracic Surgeon
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                027-526-5200
                <br/>
                MaggiepPeirce@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>
</div>

<div class="parentrow">
    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Teddy} class="docphoto"/>
            <h3>Dr. Teddy Altman</h3>
            <br/>
            <p>
                Specialization:<b>Cardiothoracic Surgery</b>
                <br/>
                <br/>
                Cardiothoracic Surgeon
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                024-789-6566
                <br/>
                TeddyAltman@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>

    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Catherine} class="docphoto"/>
            <h3>Dr. Catherine Avery</h3>
            <br/>
            <p>
                Specialization:<b>Urology Surgery</b>
                <br/>
                <br/>
                Urology Surgeon
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                456-798-6432
                <br/>
                CatherineAvery@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>

    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Jackson} class="docphoto"/>
            <h3>Dr. Jackson Avery</h3>
            <br/>
            <p>
                Specialization:<b>Plastic Surgery</b>
                <br/>
                <br/>
                Plastic Surgeon, ENT
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                564-565-5420
                <br/>
                JacksonAvery@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>

    <div class="doccard">
        <div class="docphotocontainer">
            <img src={Jo} class="docphoto"/>
            <h3>Dr. Jo Wilson</h3>
            <br/>
            <p>
                Specialization:<b>General Surgery</b>
                <br/>
                <br/>
                General Surgeon
                <br/>
                <br/>
                Contact Details:
                <br/>
                <br/>
                025-966-7452
                <br/>
                JoWilson@greysloan.com
                <br/>
                <br/>
                HMO Accreditation
                <br/>
                <br/>
                MaxiCare<br/>
                IntelliCare<br/>
                Medicard<br/>
                Cocolife
            </p>
        </div>
    </div>
</div>



      </main>
      {/* WEBSITE CONTENT ENDS HERE */}

      {/* FOOTER STRUCTURE STARTS HERE */}
      <footer className="footerFindADoctor">
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
