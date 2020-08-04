import React from 'react'
import './css/landing.css'
import matches from '../assets/matches.png'

function Landing() {
    return (
        <div>
            <div className = "landingContainer">
                <div className = "landingBgImage">
                    <img src={matches} alt="matches"/>
                </div>
                <div className = "landingContent">
                    <span id="landingSpan"> ISSUE 079</span>
                    <h1 id = "landingHeader">Catalysts</h1>
                    <p id = "landingIntro">Agents of change</p>
                    <a id="landingIssueLink">READ MORE</a>
                    {/* <div bu> */}
                    <button id="issueButton">SEE FULL ISSUE</button>


                    <button className = "down">
                    {/* <i className="arrow down"></i> */}
                    

                        SCROLL DOWN
                        </button>        
                    {/* </div> */}

                </div>

            </div>
        </div>
    )
}

export default Landing