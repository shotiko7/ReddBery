import React, {useContext} from 'react'
import "./Welcome.css"
import stars from "../../assets/stars.png"
import rocketman from "../../assets/rocketman.png"
import { VisibleContext } from '../Helper/Visible'

function Welcome() {
  const {goFirstPage}=useContext(VisibleContext)
  return (
    <div className='welcome'> 
        <img className='welcomeimg' src={stars} alt="star" />
        <h1> Welcome Rocketeer ! </h1>
        <button onClick={goFirstPage}> Start Questionnaire </button> 
        <h4> Submitted Applications </h4>
        <img className='rocketman' src={rocketman} alt="rocketman" />
    </div>
  )
}

export default Welcome