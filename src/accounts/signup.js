import React, { useState } from "react";
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";


const SignUp = ()=>{

    const [formData, setFormData] = useState({"email":"","username":"","password":"","first_name":""})
    const navigate = useNavigate()
    const subMit = (e)=>{
        e.preventDefault()
        

        axiosInstance.post(`api/user/register/`,formData)
        .then((res) =>{
            
            console.log(res);
            navigate('/login');
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
            <div className=" w3-content">
            <form onSubmit={subMit} className="w3-container w3-section w3-border" style={{Maxwidth:"400px",margin:"0px auto"}}>
                <h1 className="w3-center">Register Here</h1>
                <input type="email" 
                name="email" 
                className="w3-input w3-border w3-section"
                //style={{width:"30%"}}
                placeholder="email"  
                onChange={handleChange}
                value={formData.email}  
                required
                />
                <input type="text"
                 name="username"
                  className="w3-input w3-border w3-section"
                  //style={{width:"30%"}}
                  placeholder="username"
                  onChange={handleChange}
                  value={formData.username}
                  required
                   />
                   <input type="text"
                 name="first_name"
                  className="w3-input w3-border w3-section"
                  //style={{width:"30%"}}
                  placeholder="first_name"
                  onChange={handleChange}
                  value={formData.first_name}
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
        
                <button className="w3-section w3-button w3-purple" type="submit">Sign up</button>

                
            </form>
            </div>
        </div>
    )
}

export default SignUp;







//axios.post(`http://127.0.0.1:8000/api/user/register/`,formData,{
//    headers:{
//Authorization:localStorage.getItem('access_token')
//? 'JWT' + localStorage.getItem('access_token')
//: null,
//'Content-Type': 'application/json',
//Accept:'application/json',
//},
//})
//.then((res) =>{
//    
//    console.log(res);
//    navigate('/');
//})