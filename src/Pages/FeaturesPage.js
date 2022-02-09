import React from 'react';
import Features from '../components/Features'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FeaturesPage.css';
import '../App.css';


function FeaturesPage() {
    return (
        <div className="DownloadsPage">
            <Navbar />
            <Features />
            <Footer />
        </div>
    )
}
export default FeaturesPage