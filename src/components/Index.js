import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'
// Images
import background from '../images/index-background.jpeg'


function Index() {
    return (
        <div className="Index">
            <p>The future of patient-specific vascular modeling and hemodynamic simulation.</p>
            <div className="buttons">
                <Link to="/current-projects/" className="downloads-button">
                        <button type="button">Find out why</button>
                </Link>
                <Link to="/current-projects/" className="downloads-button">
                        <button type="button">Download now</button>
                </Link>
            </div>
        </div>
    )
}

export default Index