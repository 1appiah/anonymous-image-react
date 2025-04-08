import React, { useState } from "react";

import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";


const Login = (props)=>{

    const [formData, setFormData] = useState({"email":"","password":""})
    
    const navigate = useNavigate()
    const subMit = (e)=>{
        e.preventDefault()
        

        axiosInstance.post(`api/token/`,formData)
        .then((res) =>{
            localStorage.setItem('access_token',res.data.access);
            localStorage.setItem('refresh_token',res.data.refresh);
            axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token');
            console.log(res);
            props.user(formData.email)
            props.token(res.data.access)
            navigate('/');
        })
    }
    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData(prev=>{
            return(
                {...prev,[name]:value.trim()}
            )
        })
    }
    return(
        <div>
            <div className="w3-content">

            <form onSubmit={subMit} className="w3-container w3-section w3-border">
                <h1 className="w3-center">Log In Here</h1>
                <input type="email" 
                name="email" 
                
                className="w3-input w3-border w3-section"
                //style={{width:"30%"}}
                placeholder="email"  
                onChange={handleChange}
                value={formData.email} 
                required 
                />
                <input type="password"
                 name="password"
                  
                  className="w3-input w3-border w3-section"
                  //style={{width:"30%"}}
                  placeholder="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                   />
        
                <button className="w3-section w3-button w3-purple" type="submit">Sign In</button>

                
            </form>
            </div>
        </div>
    )
}

export default Login;