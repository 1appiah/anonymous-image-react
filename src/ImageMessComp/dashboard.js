import React, { useState,useEffect } from "react";
import axiosInstance from "../axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import ford from '../ford.jpg'
const Dashboard = (props)=>{

    const [ids, setId] = useState("no")
    let locals = localStorage.getItem('access_token')
    const getId = ()=>{
        axiosInstance.get(`api/imaging/dashboard/`,{
            headers:{
        Authorization: 'JWT ' + localStorage.getItem('access_token')
    
    },
        }
        )
        .then((res) =>{
            setId(res.data.id)
        })
        .catch(e=>{
            console.log('login',e);
            console.log("something is wrong")
            
        })
    }
    useEffect(()=>{
        if (locals) {
            getId();
        }
        
    }, [])

    return(
        <div className="w3-pale-green">
            <br />
            {
                ids !== "no" ?  
                
                <section className="w3-content">
                    <div className="w3-padding-large w3-section w3-center w3-deep-purple">
                    <h1>Welcome to Anonymous Image</h1>
                    <h4>Receive images anonymously from friends</h4>
                    </div>
                    <br></br>
                    <div className="w3-aqua w3-padding-large w3-panel w3-center" style={{borderBottomRightRadius:"100px",borderTopLeftRadius:"100px"}}>
                        <p className="w3-animate-fading">Share the link below to friends to receive images anonymously them</p>
                        <p className="">{`https://anonymous-image-react.onrender.com/send-image/${parseInt(ids)}/`}</p>
                    </div>
                    <div className="w3-row-padding w3-white w3-stretch">
                        <div className="w3-half w3-animate-left">
                            <img src={ford} alt="vim" style={{maxWidth:"100%"}}/>
                            <p className="w3-white">4 minutes ago</p>
                        </div>
                        <div className="w3-half w3-animate-right">
                            <img src={ford} alt="vim" style={{maxWidth:"100%"}}/>
                            <p>4 minutes ago</p>
                        </div>
                    </div>
                    <div className="w3-row-padding w3-stretch">
                        <div className="w3-half w3-hover-lime w3-sand" style={{height:"400px"}}>
                            <div className="w3-display-container" style={{height:"400px"}}>
                                <h3 className="w3-display-middle">Share with friends <span>Connect with friends</span></h3>
                            </div>
                        </div>
                        <div className="w3-half w3-hover-lime w3-teal" style={{height:"400px"}}>
                            <div className="w3-display-container" style={{height:"400px"}}>
                                <h3 className="w3-display-middle">Have fun with friends<span> Get to see those images</span></h3>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="w3-content">
                    <div className="w3-padding-large w3-center w3-deep-purple">
                        <h1>Welcome to Anonymous Image Messaging</h1>
                        <h4>Receive images anonymously from friends</h4>
                    </div>
                    <div>
                    </div>
                    <div className="w3-aqua w3-hover-light-blue w3-padding-large w3-panel w3-center" style={{borderBottomRightRadius:"100px",borderTopLeftRadius:"100px"}}>
                    <p>Create an account to start receiving images anonymously from friends</p>
                    <br />
                    <Link to={'/signup'} className="w3-button w3-border w3-green w3-animate-fading w3-padding w3-round">register</Link>  
                    </div>
                    <div className="w3-row-padding w3-stretch">
                        <div className="w3-half w3-hover-lime w3-sand" style={{height:"400px"}}>
                            <div className="w3-display-container" style={{height:"400px"}}>
                                <h3 className="w3-display-middle">Share with friends <span>Connect with friends</span></h3>
                            </div>
                        </div>
                        <div className="w3-half w3-hover-lime w3-teal" style={{height:"400px"}}>
                            <div className="w3-display-container" style={{height:"400px"}}>
                                <h3 className="w3-display-middle">Have fun with friends <span>Get to see those images</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="w3-indigo w3-padding-large w3-panel w3-center" style={{borderBottomRightRadius:"100px",borderTopLeftRadius:"100px"}}>
                    <p>Log in to see images from friends</p>
                    <br />
                    <Link to={'/login'} className="w3-button w3-border w3-green w3-padding w3-round">Sign in</Link>  
                    </div>
                </section>

            }
        </div>
    )
}

export default Dashboard


//<p><a href={`http://localhost:3000/send-image/${parseInt(ids)}`}>click here</a></p>
