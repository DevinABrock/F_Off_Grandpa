import React, { useState, useEffect } from 'react'
import {createStore} from 'redux'
import {Link} from 'react-router-dom'
import '../src/App.css'
import Fade from 'react-reveal/Fade'
import PlayerGrandpa from './components/images/nice_grandpa.png'
import LinkedIn from './components/images/logo-linkedin.png'
import GitHub from './components/images/GitHub_logo.png'

// const store = createStore();

function App() {

  // ---------- Save Username ------------//

  const [username, setUsername] = useState("Player")
  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username])


  return (
    <div className="body">
      <div className="pageContainer">

        <Fade left cascade> 
        <div className="ruleSection">
          <div className="ruleArea">
            <div className="ruleTitle"><b>How To Play</b></div>
            <div className="rulePoint">-Both grandpas get 3 roasts each</div>
            <div className="rulePoint">-The more personal your roast, the higher your disrespect rating</div>
            <div className="rulePoint">-The grandpa with the highest disrespect rating wins</div>
          </div>
        </div>
        </Fade>

        <div className="menuSection">

          <div className="menuTitle"><b> F*** OFF GRAMPS!! </b></div>
          <div className="menuSubTitle">Get Lost! </div>
          <form className="inputArea">
            <input 
            className="menuNameInput"
            placeholder="What's Your Name?"
            type="text"
            required
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
            <Link className="navbarOption" to='/game'><button className="menuNameSubmit" type="Submit">Begin</button></Link>
          </form>
          <Link className="menuStartButton" to='/credits'><a href="/uncensored" className="menuStartButton"><b>Credits</b></a></Link>

        </div>
          <div className="socialSection">
        <Fade right cascade> 
            <div className="contactArea">
              <div className="ContactTitle">Connect With Me</div>
              <a href="https://www.linkedin.com/in/devin-brock-67a842220/" className="contactItem"><img className="connectImg" src={LinkedIn} />LinkedIn</a>
              <a href="https://github.com/DevinABrock" className="contactItem"><img className="connectImg" src={GitHub} />GitHub</a>
            </div>
        </Fade>
            <a href="https://www.ebay.com/str/35moving"><img className="playerGrandpa" src={PlayerGrandpa} alt="You"></img></a>
          </div>
      </div>
    </div>
  )
}

export default App
