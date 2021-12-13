import React from 'react'
import keyWord from './keyWordList.js'


//---------API----------//

// Random response from Grandpa
export function randomNumber(min, max) {
    return Math.floor(Math.random()*40);
}


//---------SCORING----------//

// Scoring player
export function scoring(userText) {
    console.log(userText)
    let playerScore = 0;
        keyWord.forEach((obj)=> {
            if (userText.includes(obj.word)){
                console.log(obj.word)
                playerScore += obj.score
            }
        })
        return playerScore
}

// Scoring Grandpa
export function scoringGrandpa(grandpaText) {
    console.log(grandpaText)
    let grandpaScore = 0;
        keyWord.forEach((obj)=> {
            if (grandpaText.includes(obj.word)){
                console.log(obj.word)
                grandpaScore += obj.score
            }
        })
        return grandpaScore
}


//---------Rounds----------//




