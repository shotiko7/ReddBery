import React, {useContext} from 'react'
import Visible, { VisibleContext } from '../Helper/Visible'

function FirstPage() {
    const {welcomeFirst, firstSecond}=useContext(VisibleContext);
  return (
    <div>
        <button onClick={welcomeFirst}> Back </button>
        <button onClick={firstSecond}> next </button>
    </div>
  )
}

export default FirstPage