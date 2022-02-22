import React from 'react'
import ReactPlayer from "react-player/youtube"
import { Link } from 'react-router-dom'
import './Resources.css'

function Resources() {
    return(
        <div className="Resources">
            <h1>Resources</h1>

            <p>You can post questions and discuss CRIMSON on our <a href="https://groups.google.com/forum/#!forum/crimson-users">forum and mailing list</a></p>
        
            <p>Make sure to check our <a href="http://www.crimson.software/publications.html">publications page</a> for detailed information about the components of CRIMSON as they were developed.</p>

            <h2>Workshops</h2>

            <p>Learn about CRIMSON in person at one of our workshops. </p>

            <h2>Documentation</h2>

            <p>Our user documentation can be access <a>here</a></p>

            <p>See the source code as well as developer documentation for the GUI <a href="https://github.com/carthurs/CRIMSONGUI">here</a> and the flowsolver <a href="https://github.com/carthurs/CRIMSONFlowsolver">here</a>.</p>

            <h2>Videos</h2>

            <p>Along with the documentation, see walkthroughs of different basic tasks below.</p>

            <p>Create a vessel centerline</p>
            <p style={{textAlign: "center"}}><ReactPlayer url="https://www.youtube.com/watch?v=cI7pM-WRWGE"/></p>

            <p>Manual vessel segmentation</p>
            <p style={{textAlign: "center"}}><ReactPlayer url="https://youtu.be/b5Is9AY19uA"/></p>
            
            <p>Automatic vessel segmentation</p>
            <p style={{textAlign: "center"}}><ReactPlayer url="https://youtu.be/HiYmBkbxod0"/></p>

        </div>
    )
}
export default Resources