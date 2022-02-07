import React from 'react';
import Index from '../components/Index'
import './Home.css';
import '../App.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Home() {
    return (
        <div className="Home">
            <Navbar />
            <Index />
            <Footer />
        </div>
    )
}
export default Home
