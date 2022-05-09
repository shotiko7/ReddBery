import React, { useContext } from 'react'
import { VisibleContext } from '../Helper/Visible'

function SecondPage() {
    document.title = "SecondPage"
    const {firstSecond}=useContext(VisibleContext)
  return (
    <div> 
        <button onClick={firstSecond}> back </button>
    </div>
  )
}

export default SecondPage