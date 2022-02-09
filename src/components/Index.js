import React from 'react'
import { Link } from 'react-router-dom'
import { Timeline, Follow } from 'react-twitter-widgets'
import './Index.css'

function Index() {
    return (
        <div className="Index">
            <div className="welcome-title">
                <p>The future of patient-specific vascular modeling and hemodynamic simulation.</p>
            </div>
            <div className="buttons">
                <Link to="/features/" className="features-button">
                        <button type="button">Find out why</button>
                </Link>
                <Link to="/downloads/" className="downloads-button">
                        <button type="button">Download now</button>
                </Link>
            </div>
            <a href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A3000%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ECRIMSONsoftware&region=follow_link&screen_name=CRIMSONsoftware">
                <div className="follow">
                    <i class="fab fa-twitter fa-1x"></i>
                    <p>Follow @CRIMSONsoftware</p>
                </div>
            </a>

            <div className="timeline">
                <Timeline dataSource={{ sourceType: 'profile',screenName: 'CRIMSONsoftware' }} options={{height: '400', width: '600' }} />
            </div>
        </div>
    )
}

export default Index