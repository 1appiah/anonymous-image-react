import React,{useState} from 'react'
import { NavLink,useNavigate } from "react-router-dom";

import SmallNav from './smallnav'
import Bignav from './bignav'




const MainNav = () => {
    const navigate = useNavigate()
    const [toggle,setToggle] = useState(false)
   const onToggle = ()=>{
    setToggle(!toggle)
  }
    const handleLogout = ()=>{
    let user = localStorage.setItem('access_token','')
        navigate('/login')
    }
    let user = localStorage.getItem('access_token')
  return (
    <>
        <Bignav user={user} handleLogout={handleLogout}></Bignav>
        <SmallNav ontoggle={onToggle} toggle={toggle} user={user} handleLogout={handleLogout}></SmallNav>
    </>
  )
}

export default MainNav