import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import { timeAgo } from "./utils";
import { TailSpin } from 'react-loader-spinner';

const AllImages = (props)=>{


    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const deleteImage = (id) => {
        setPost((prevPost) => prevPost.filter((pos) => pos.id !== id));
        delPost(id);
    };
    
    const getPost = ()=>{
        axiosInstance.get(`api/imaging/view-image/`,{
            headers:{
        Authorization: 'JWT ' + localStorage.getItem('access_token')
    
    },
        }
        )
        .then((res) =>{
            console.log(res.data)
            setPost(res.data)
            setLoading(false);
        })
        .catch(e=>{
            console.log('login',e)
            //navigate('/login')
        })

    }
    
    const delPost = (id)=>{
        axiosInstance.get(`api/imaging/delete-image/${id}`,{
            headers:{
        Authorization: 'JWT ' + localStorage.getItem('access_token')
    
    },
        }
        )
        .then((res) =>{
            console.log("deleted successfully")
            
        })
        .catch(e=>{
            console.log('login',e)
            //navigate('/login')
        })
    }

    useEffect(()=>{
        getPost();
    }, [])

    return(
        
        <div>
    <br></br>
        {
            loading ? (
                <div className="w3-display-container w3-padding-large" style={{height: '400px',position:'relative'}}>
                    <div className="w3-display-middle w3-center">
                        <TailSpin
                          height="60"
                          width="60"
                          color="teal"
                          ariaLabel="loading"
                          radius="1"
                          visible={true}
                        />
                        <p>Loading...</p>
                    </div>
                </div>
            ) 
            :
        
            <div>
                <div className="w3-row-padding">
                {post.length !== 0 ? 
                <div className="w3-content">
                <h1>All Anoymous Images</h1>
                {post.map((pos)=>{
                    return (
                    <div key={pos.id} className="w3-container w3-section w3-col l3 m4 s12">
                        <div className="w3-card">
                        <img src={pos.image} alt="halt" style={{maxWidth:'100%',maxHeight:'100%'}}></img>
                        <hr/>
                        
                        <p  className="w3-center">{timeAgo(pos.timestamp)}</p>
                        <p className="w3-center w3-padding">
                        <button onClick={()=>deleteImage(pos.id)} className="w3-button w3-red w3-hover-brown w3-round-large w3-small">delete</button>
                        </p>

                        </div>
                    </div>
                    )
                })
                }
                </div>

                 : 
                <div className="w3-center">
                    <h1 className="w3-padding-large ">You have no anonymous image in your gallery</h1>
                    <div className="w3-aqua w3-padding-large w3-panel w3-center" style={{borderBottomRightRadius:"100px",borderTopLeftRadius:"100px"}}>
                        <p>Share the link below to friends to receive images anonymously them</p>
                        
                        <p>share the link on your dashboard</p>

                    </div>
                    <div className="w3-row-padding w3-stretch">
                        <div className="w3-half w3-hover-lime w3-sand" style={{height:"400px"}}>
                            <div className="w3-display-container" style={{height:"400px"}}>
                                <h3 className="w3-display-middle">Share with friends <span>Connect with friends</span></h3>
                            </div>
                        </div>
                        <div className="w3-half w3-hover-lime w3-teal" style={{height:"400px"}}>
                            <div className="w3-display-container" style={{height:"400px"}}>
                                <h3 className="w3-display-middle">Have fun with friends<span>Get to see those images</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                }

                </div>
            </div>

        }
        </div>

        

    )
}


export default AllImages;