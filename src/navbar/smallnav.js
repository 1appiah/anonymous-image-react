import React from 'react'
import { NavLink } from 'react-router-dom'

const SmallNav = (props) => {
    return (
      
      <div className='w3-hide-medium w3-hide-large w3-white' style={{position: "sticky",top:0}}>
          <div className='w3-bar w3-light-grey ' >
            <NavLink to="/" className="w3-bar-item  w3-button ">DashBoard</NavLink>
            <button className='w3-bar-item w3-button w3-right' onClick={props.ontoggle}>☰</button>
            </div>
          
          <div className={props.toggle? 'w3-bar-block w3-animate-top' : 'w3-hide'}>
              <NavLink to="/about" className="w3-bar-item w3-block w3-button " onClick={props.ontoggle}>About</NavLink>
              {props.user ?
              <>
              <button type="button" onClick={props.handleLogout} className="w3-bar-item w3-button  w3-right">Logout</button>
              <NavLink to="/all-images" className="w3-bar-item w3-button" onClick={props.ontoggle}>Images</NavLink>
              
              </>
              :
              <>
              <NavLink to="/login" className="w3-bar-item w3-button " onClick={props.ontoggle}>Login</NavLink>
              <NavLink to="/signup" className="w3-bar-item w3-button " onClick={props.ontoggle}>Register</NavLink>
              </>
                  }
          </div>
      </div>
      
  )
}

export default SmallNav