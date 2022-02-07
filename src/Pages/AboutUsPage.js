import React from 'react';
import AboutUs from '../components/AboutUs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AboutUsPage.css';
import '../App.css';

function AboutUsPage() {
    return (
        <div className="AboutUsPage">
            <Navbar />
            <AboutUs />
            <Footer />
        </div>
    )
}
export default AboutUsPage