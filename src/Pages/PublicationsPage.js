import React from 'react';
import Publications from '../components/Publications'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PublicationsPage.css';
import '../App.css';

function PublicationsPage() {
    return (
        <div className="PublicationsPage">
            <Navbar />
            <Publications />
            <Footer />
        </div>
    )
}
export default PublicationsPage