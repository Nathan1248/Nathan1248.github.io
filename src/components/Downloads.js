import React from 'react'
import { Link } from 'react-router-dom'
import './Downloads.css'

function Downloads() {
    return(
        <div className="Downloads">
            <h1>Download CRIMSON</h1>
            <p>CRIMSON binary installers are provided free of charge. 
                The Trial Version is time-limited to 365 days per release, but downloading a newer version will reset the clock. 
                We do this to encourage people to use the latest release.
            </p>
            <div className="download-form">
                <h3>Please fill this form out to receive a copy of CRIMSON</h3>
                <form>
                    <div className="name">
                        <div className="first-name">
                            <label for="fname">First name:</label><br></br>
                            <input type="text" id="fname" name="fname" required></input>
                        </div>
                        <div className="last-name">
                            <label for="lname">Last name:</label><br></br>
                            <input type="text" id="lname" name="lname" required></input>
                        </div>
                    </div>
                    <div className="email">
                        <label for="email">Email:</label><br></br>
                        <input type="text" id="email" name="email" required></input>
                    </div>
                    <label for="use-type-select">Use:</label><br></br>
                    <select id="use-type-select" name="use-type-select" required>
                        <option value="Academic">Academic</option>
                        <option value="Academic">Industrial</option>
                        <option value="Academic">Clinical</option>
                        <option value="Academic">Other</option>
                    </select>
                    <div className="submit">
                        <input type="submit" value="Submit and download CRIMSON" aria-label="Submit and download CRIMSON"></input>
                    </div>
                </form>
                <script type="text/javascript" src="https://form.jotform.com/jsform/220364980274155"></script>
            </div>
        </div>
    )
}
export default Downloads