import React from 'react'
import './CSS/matchHistory.css'
import PlayerGrandpa from './images/nice_grandpa.png'
import Fade from 'react-reveal/Fade'
import LinkedIn from './images/logo-linkedin.png'
import GitHub from './images/GitHub_logo.png'

function MatchHistory() {
    return (
        <div className="body">
            <div className="MatchHistoryBodyArea">
            <Fade left cascade>
            <div className="matchHistoryContainer">
                <div className="matchHistoryTitle">Match History</div>
                <div className="matchHistoryArea">
                    <div className="matchHistoryCard">
                        <div className="matchCardArea">
                            <div className="grampPoints">
                                <div>Grandpa</div>
                                <div>40 Points</div>
                            </div>
                            <div className="winLose">Win</div>
                            <div className="playerPoints">
                                <div>You</div>
                                <div>64 Points</div>
                            </div>
                        </div>
                    </div>

                    <div className="matchHistoryCard2">
                    <div className="matchCardArea">
                            <div className="grampPoints">
                                <div>Grandpa</div>
                                <div>70 Points</div>
                            </div>
                            <div className="winLose">Loss</div>
                            <div className="playerPoints">
                                <div>You</div>
                                <div>69 Points</div>
                            </div>
                        </div>
                    </div>

                    <div className="matchHistoryCard">
                    <div className="matchCardArea">
                            <div className="grampPoints">
                                <div>Grandpa</div>
                                <div>62 Points</div>
                            </div>
                            <div className="winLose">Win</div>
                            <div className="playerPoints">
                                <div>You</div>
                                <div>72 Points</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="matchHistoryStartBtn">Start Game</div> */}
            </div>
            </Fade>
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

export default MatchHistory
