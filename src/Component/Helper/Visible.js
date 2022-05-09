import React, {useState} from 'react'

export const VisibleContext = React.createContext()

function Visible(props) {
  
    const [welcome, setWelcome]=useState(true);
    const [first, setFirst]=useState(false);
    const [second, setSecond]=useState(false)
    
    const welcomeFirst =()=>{
        if(welcome){
          setWelcome(false)
          setFirst(true)
        } else {
          setFirst(false);
          setWelcome(true);
        }
    }
    const firstSecond =()=>{
      if(first){
        setFirst(false)
        setSecond(true)
      }else {
        setSecond(false)
        setFirst(true)
      }
    }
    const value = {welcome, welcomeFirst, first, firstSecond, second}
  return (
    <VisibleContext.Provider value={value}>
        {props.children}
    </VisibleContext.Provider>
  )
}

export default Visible