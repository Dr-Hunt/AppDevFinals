import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FindADoctor from './FindADoctor';
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";



function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindADoctor" element={<FindADoctor />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        



      </Routes>
    </Router>
  );
}

export default App;