import React, {useState, useEffect} from 'react'
import './CSS/uncensored.css'
import roastList from './roastList'
import { randomNumber, scoring, scoringGrandpa, roundCounter, gameOver } from './functions'
import MeanGrandpa from './images/mean_grandpa.png'
import PlayerGrandpa from './images/nice_grandpa.png'
import Fade from 'react-reveal/Fade'
import axios from 'axios'



function Uncensored() {

  // ---------- Get Username ------------//

  const save = localStorage.getItem('username');
  const savedName = JSON.parse(save);


  // ---------- useStates ------------//
  
  // Api data for call
  const [roastData, setRoastData] = useState(null)

  // User input and score
  const [userText, setUserText] = useState("")
  const [userScore, setUserScore] = useState(0)
  const [userPastScore, setUserPastScore] = useState(0)

  // Grandpa input and score
  const [grandpaText, setGrandpaText] = useState("")
  const [grandpaScore, setGrandpaScore] = useState(0)
  const [grandpaPastScore, setGrandpaPastScore] = useState(0)

  // Number round
  const [round, setRound] = useState(1)
  const [call, setCall] = useState("Begin")


  // ---------- API CALL ------------//
  
  // API call for roast
  useEffect(()=>{
    const newRoast = async() =>{
      let response = await axios(`https://foaas.com${roastList[randomNumber()].key}`)
    setRoastData(response) // saves to local state
    }
    newRoast();
  }, [round])


  // ---------- Scoring ------------//

  // Scoring user input
  const handleSubmit = (e) =>{
    e.preventDefault()
    setUserText("")
    setUserScore( userScore + scoring(userText.toLowerCase().split(" ")))

    // --- Game Progression --- //
    handleApi(roastData.data.message)
    roundCounter(round)
  }

  // Scoring Grandpa
  const handleApi = (e) =>{
    setGrandpaScore( grandpaScore + scoringGrandpa(e.toLowerCase().split(" ")))
    
  }


  // ---------- Game Progression -----------//

  // Progress through rounds
  function roundCounter(e){
    if (e === 3) {
      calling()
      gameOver();
    } else{
        setRound(e+1)
        // nextRound(round)
    }
  }

  // Call win or lose
  function calling(){
    if (userScore >= grandpaScore){
      setCall("Win")
      setUserPastScore(userPastScore + 1)
    }else{
      setGrandpaPastScore(grandpaPastScore + 1)
      setCall("Lose")
    }
  }

  // Game over
  function gameOver(){
    // Save To Local Storage

    // Clear Game
    setRound(1);
    setGrandpaScore(0);
    setUserScore(0);
  } 



  return (
    <div className="body">
      
      <div className="chatArea">
        <div className="chatBubbleSpot">
          <div className="chatBubbleTitle">
            <div>Grandpa</div>
            <div>Roast Score: <span className='scoreText'>{grandpaScore}</span></div>
          </div>
          <div className="chatbubble">{roastData == null ? "Thinking...": roastData.data.message}</div>
        </div>
        <div className="chatBubbleSpot">
        <div className="chatBubbleTitle">
            <div>{savedName}</div>
            <div>Roast Score: <span className='scoreText'>{userScore}</span></div>
          </div>
          <form className="chatbubblePlayer"
          onSubmit={handleSubmit}>
            <input 
              className="chatbubbleInput" 
              placeholder="Do your worst."
              type="text"
              required
              value={userText}
              onChange={(e)=> setUserText(e.target.value)}
            />
            <button className="gameSubmit" type="Submit" >Submit</button>
          </form>
        </div>
        
      </div>
      
        <div className="characterArea">
      <Fade left cascade>
          <img className="meanGrandpa" src={MeanGrandpa} alt="Mean Grandpa"></img>
      </Fade>

      <Fade bottom cascade>
          <div className="roundArea">
            <div className="roundCall">{call}</div>
            <div className="roundPastScore">W:{userPastScore} - L:{grandpaPastScore}</div>
            <div className="roundText">Round</div>
            <div className="roundText">{round}</div>
          </div>
      </Fade>

      <Fade right cascade>
          <img className="playerGrandpa" src={PlayerGrandpa} alt="You"></img>
      </Fade>
          
        </div>
    </div>
  )
}

export default Uncensored
