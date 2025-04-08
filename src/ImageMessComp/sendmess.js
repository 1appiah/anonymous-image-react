import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { useNavigate,useParams } from "react-router-dom";



const SendImage = ()=>{

    const [pic,setPic] = useState(null);
    const navigate = useNavigate();
    const {userid} = useParams()

    const subMit = (e)=>{
        e.preventDefault();
        let data = new FormData()
        data.append("image",pic.image[0]);
        axiosInstance.post(`imaging/${userid}`,data,{
            headers:{
        'Content-Type':'multipart/form-data',
    },
        })
        .then((res) =>{
        console.log(res);
            navigate('/')
        })
        .catch(e=>{
            console.log('login',e)
            navigate('/login')
        })
        
    }
    const handPic = (e)=>{
        setPic(
            {"image":e.target.files}
        )
    }
    
    return(
        
        <div className="w3-content">
            <section>
                <div>
                <div className="w3-padding-large w3-center w3-deep-purple">
                        <h1>Welcome to Anonymous Image Messaging</h1>
                        <h4>Send image anonymously to .....</h4>
                    </div>
                </div>
            </section>
            <br></br>
            <section>
            <div className="w3-aqua w3-padding-large w3-panel w3-center" style={{borderBottomRightRadius:"100px",borderTopLeftRadius:"100px"}}>
                <form onSubmit={subMit} className="w3-padding-large w3-display-container w3-animate-zoom">
                    <input 
                    type="file"
                    accept="image/*"
                    required
                    name="image"
                    onChange={handPic}
                    className="w3-input w3-border w3-display-topmiddle"
                    style={{width:"300px"}}
                    />
                    <p>
                    <br />
                    <button type="submit" className="w3-button w3-round  w3-blue">post</button>
                    </p>
                </form>

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
            
        </div>

        

    )
}


export default SendImage;