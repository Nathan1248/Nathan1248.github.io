import React from 'react';
import Downloads from '../components/Downloads'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './DownloadsPage.css';
import '../App.css';


function DownloadsPage() {
    return (
        <div className="DownloadsPage">
            <Navbar />
            <Downloads />
            <Footer />
        </div>
    )
}
export default DownloadsPage