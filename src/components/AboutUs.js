import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'

// Images
import nathanyl from '../images/team/nathanyl.jpg'
import figueroc from '../images/team/figueroc.png'

function AboutUs() {
    return(
        <div className="AboutUs">
            <div className="title">
                <h1>Meet the team!</h1>
                <p>CRIMSON was developed and maintained by the University of Michigan Computational Vascular Biomechanics Lab</p>

            </div>
            <div className="card">
                <img src={figueroc} alt="nathanyl profile" width="200"></img>
                <div className="info">
                    <h1>C. Alberto Figueroa</h1>
                    <h2>Computational Vascular Biomechanics Lab</h2>
                    <p>Professor of Vascular Surgery and Biomedical Engineering</p>
                    <i class="fa fa-envelope"></i>
                    <i>figueroc@umich.edu</i><br></br><br></br>
                    <i class="fas fa-phone"></i>
                    <i>placeholder</i>
                </div>
            </div>
            <div className="card">
                <img src={nathanyl} alt="figueroc profile" width="200"></img>
                <div className="info">
                    <h1>Nathan Li</h1>
                    <h2>Computational Vascular Biomechanics Lab</h2>
                    <p>Web Developer</p>
                    <i class="fa fa-envelope"></i>
                    <i>nathanyl@umich.edu</i><br></br><br></br>
                    <i class="fas fa-phone"></i>
                    <i>248-808-5482</i>
                </div>
            </div>
        </div>
    )
}
export default AboutUs