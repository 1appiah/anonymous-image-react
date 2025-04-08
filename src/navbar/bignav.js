import React from "react";
import { NavLink} from "react-router-dom";



const Bignav = (props)=>{

    return(
        <>
        <div className="w3-hide-small w3-top">
            <div className="w3-bar w3-teal">
                <NavLink to="/" className="w3-bar-item w3-button w3-border">Dashboard</NavLink>
                <NavLink to="/about" className="w3-bar-item w3-button w3-border w3-hide-small">About</NavLink>
                {props.user ?
                <>
                <NavLink to="/all-images" className="w3-bar-item w3-button w3-border">Images</NavLink>
                <button type="button" onClick={props.handleLogout} className="w3-bar-item w3-button w3-border w3-right">Logout</button>
                </>
                :
                <>
                <NavLink to="/login" className="w3-bar-item w3-button w3-border">Login</NavLink>
                <NavLink to="/signup" className="w3-bar-item w3-button w3-border">Register</NavLink>
                </>
                }
            </div>
            <br />
        </div>
        </>
    )
}

export default Bignav


//










