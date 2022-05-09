import React, {useState} from 'react'

export const VisibleContext = React.createContext()

function Visible(props) {
    const [welcome, setWelcome]=useState(true);
    const [first, setFirst]=useState(false);
    
    const goFirstPage =()=>{
        if(welcome){
          setWelcome(false)
          setFirst(true)
        } else {
          setFirst(false);
          setWelcome(true);
        }

    }
    const value = {welcome, goFirstPage, first}
  return (
    <VisibleContext.Provider value={value}>
        {props.children}
    </VisibleContext.Provider>
  )
}

export default Visible