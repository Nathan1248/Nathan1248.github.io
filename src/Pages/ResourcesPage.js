import React from 'react';
import Resources from '../components/Resources'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ResourcesPage.css';
import '../App.css';

function ResourcesPage() {
    return (
        <div className="ResourcesPage">
            <Navbar />
            <Resources />
            <Footer />
        </div>
    )
}
export default ResourcesPage