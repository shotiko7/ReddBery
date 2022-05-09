import React, { useContext, Fragment } from "react";
import { VisibleContext } from "./Component/Helper/Visible";
import Welcome from "../src/Component/Welcome/Welcome"
import FirstPage from "./Component/FirstPage/FirstPage";
import SecondPage from "./Component/SecondPage/SecondPage";


function App() {
  const {welcome, first, second}=useContext(VisibleContext)
  return (
    <Fragment>
        {welcome&&<Welcome />}
        {first&&<FirstPage />}
        {second&&<SecondPage />}
    </Fragment>
  );
}

export default App;
