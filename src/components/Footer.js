import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
// Images
import UmichLogo from '../images/umich-logo.png'
import ERCLogo from '../images/erc-logo.png'
import KingsCollegeLogo from '../images/kingscollege-logo.png'

function Footer() {
    return (
        <div className="Footer">
            <a href="https://bloodflow.engin.umich.edu/" target="_blank"><img src={UmichLogo} alt="umich-logo"/></a>
            <a href="https://erc.europa.eu/" target="_blank"><img src={ERCLogo} alt="umich-logo"/></a>
            <a href="https://www.kcl.ac.uk/bmeis" target="_blank"><img src={KingsCollegeLogo} alt="umich-logo"/></a>
        </div>
    )
}

export default Footer