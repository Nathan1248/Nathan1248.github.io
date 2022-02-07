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
            <img src={UmichLogo} alt="umich-logo"/>
            <img src={ERCLogo} alt="umich-logo"/>
            <img src={KingsCollegeLogo} alt="umich-logo"/>
        </div>
    )
}

export default Footer