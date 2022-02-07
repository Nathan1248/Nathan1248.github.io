import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// Images
import textLogo from '../images/crimson-logo-text.png'

function Navbar() {
    return(
        <div className="Navbar">
            <div className="Logo">
                <Link to="/" className="logo-button"><img src={textLogo} width="300" alt="crimson-long-logo"></img></Link>
            </div>
            <div className="Buttons">
            <ul>
                <li>
                    <Link to="/downloads/" className="downloads-button">
                        <button type="button">Downloads</button>
                    </Link>
                </li>
                <li>
                    <a href="http://www-personal.umich.edu/~lizliv/index.html" className="documentation-button" target="_blank">
                        <button type="button">Documentation</button>
                    </a>
                </li>
                <li>
                    <Link to="/current-projects/" className="publication-button">
                        <button type="button">Publications</button>
                    </Link>
                </li>
                <li>
                    <Link to="/about-us/" className="documentation-button">
                        <button type="button">About us</button>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        




    )
}

export default Navbar