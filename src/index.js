import React from "react";
import  ReactDOM  from "react-dom/client";
import App from './app'

import './w3.css';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import MainNav from "./navbar/mainnav";




// commenting in JsX
/** */




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
<BrowserRouter basename="/">
  <MainNav/>
  <br />
  <App />
</BrowserRouter>
  </React.StrictMode>
);

if (module.hot) {
    module.hot.accept();
}
