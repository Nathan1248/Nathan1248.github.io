import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// Images
import textLogo from '../images/crimson-logo-text.png'

function Navbar() {
    return(
        <div className="Navbar">
            <div className="Logo">
                <img src={textLogo} width="300" alt="crimson-long-logo"></img>
            </div>
            <div className="Buttons">
            <ul>
                <li>
                    <Link to="/current-projects/" className="downloads-button">
                        <button type="button">Downloads</button>
                    </Link>
                </li>
                <li>
                    <Link to="/current-projects/" className="documentation-button">
                        <button type="button">Documentation</button>
                    </Link>
                </li>
                <li>
                    <Link to="/current-projects/" className="publication-button">
                        <button type="button">Publications</button>
                    </Link>
                </li>
                <li>
                    <Link to="/current-projects/" className="documentation-button">
                        <button type="button">About us</button>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        




    )
}

export default Navbar