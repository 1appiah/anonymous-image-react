import React, { useState } from "react";
import {Route, Routes} from "react-router-dom";
import SignUp from "./accounts/signup";
import Login from "./accounts/login";
import AllImages from "./ImageMessComp/allimages";
import SendImage from "./ImageMessComp/sendmess";
import Dashboard from "./ImageMessComp/dashboard";
import About from "./ImageMessComp/about";
import FAke from "./ImageMessComp/fake";

function App() {
    

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)      
    return(

      <Routes>
        <Route path="/signup" element={<SignUp></SignUp>}/>
        <Route path="/login" element={<Login user={setUser} token={setToken}></Login>}/>
        <Route path="/all-images/" element={<AllImages></AllImages>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/send-image/:userid/" element={<SendImage></SendImage>}/>
        <Route exact path="/" element={<Dashboard></Dashboard>}/>
        <Route exact path="*" element={<FAke/>}/>



      </Routes>
      
    )
}

export default App;