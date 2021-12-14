import React from 'react'
import './CSS/credits.css'
import PlayerGrandpa from './images/nice_grandpa.png'
import Fade from 'react-reveal/Fade'
import LinkedIn from './images/logo-linkedin.png'
import GitHub from './images/GitHub_logo.png'

function credits() {
    return (
        <div className="body">
            <div className="MatchHistoryBodyArea">
            <Fade left cascade>
            <div className="matchHistoryContainer">

                    {/* ---------- Banner ---------- */}

                <div className="matchHistoryTitle">Thanks For Playing!</div>
                <div className="matchHistoryArea">


                    {/* ---------- Created With ---------- */}

                    <div className="matchHistoryCard2">
                        <div className="matchCardArea">
                            <div className="grampPoints">
                                <div>This app was created with:</div>
                                <div>React | JavaScript | HTML | CSS | Flexbox</div>
                            </div>
                        </div>
                    </div>


                    {/* ---------- API ---------- */}

                    <div className="matchHistoryCard2">
                        <div className="matchCardArea">                  
                            <div className="grampPoints">
                                <div>Grandpa quotes from:</div>
                                <a className='link' href='https://www.foaas.com/'>FOAAS API</a>
                            </div>
                        </div>
                    </div>


                    {/* ---------- Other Projects ---------- */}

                    <div className="matchHistoryCard2">
                    <div className="matchCardArea">
                            <div className="grampPoints">
                                <div>My other projects:</div>
                                <div><a className='link' href='https://videogamesearch.netlify.app/'>Video Game Search</a> | <a className='link' href='http://ec2-3-144-44-170.us-east-2.compute.amazonaws.com/login'>Doorz</a></div>
                            </div>
                        </div>
                    </div>


                    {/* ---------- My ebay Store ---------- */}

                    <div className="matchHistoryCard2">
                    <div className="matchCardArea">
                            <div className="grampPoints">
                                <div>My ebay store:</div>
                                <a className='link' href='https://www.ebay.com/str/35moving'>Good Game Hub</a>
                            </div>
                        </div>
                    </div>


                    {/* ---------- Images ---------- */}

                    <div className="matchHistoryCard2">
                    <div className="matchCardArea">
                            <div className="grampPoints">
                                <div>Images from:</div>
                                <div>Google</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </Fade>


                    {/* ---------- Right Side ---------- */}

            <div className="matchHistoryGrandpa"> 
                    <div className="contactArea">
                    <div className="ContactTitle">Connect With Me</div>
                    <a href="https://www.linkedin.com/in/devin-brock-67a842220/" className="contactItem"><img className="connectImg" src={LinkedIn} />LinkedIn</a>
                    <a href="https://github.com/DevinABrock" className="contactItem"><img className="connectImg" src={GitHub} />GitHub</a>
                    </div>
                <img className="playerGrandpa" src={PlayerGrandpa}/>
                </div>
            </div>
        </div>
    )
}

export default credits;
