import React from 'react'
import "./Welcome.css"
import stars from "../assets/stars.png"
import rocketman from "../assets/rocketman.png"

function Welcome() {
  return (
    <div className='welcome'> 
        <img className='welcomeimg' src={stars} alt="star" />
        <h1> Welcome Rocketeer ! </h1>
        <button> Start Questionnaire </button> 
        <h4> Submitted Applications </h4>
        <img className='rocketman' src={rocketman} alt="rocketman" />
    </div>
  )
}

export default Welcome