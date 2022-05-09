import React, { useContext, Fragment } from "react";
import { VisibleContext } from "./Component/Helper/Visible";
import Welcome from "../src/Component/Welcome/Welcome"
import FirstPage from "./Component/FirstPage/FirstPage";


function App() {
  const {welcome, first}=useContext(VisibleContext)
  return (
    <Fragment>
        {welcome&&<Welcome />}
        {first&&<FirstPage />}
    </Fragment>
  );
}

export default App;
