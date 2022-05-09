import React, {useContext} from 'react'
import Visible, { VisibleContext } from '../Helper/Visible'

function FirstPage() {
    const {goFirstPage}=useContext(VisibleContext);
  return (
    <div>
        <button onClick={goFirstPage}> Back </button>
    </div>
  )
}

export default FirstPage