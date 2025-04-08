import React from 'react'

const About = () => {
  return (
    <div className='w3-content'>
        <div className='w3-padding-large w3-center'>
            <h1>About Us</h1>
            <h4>This simple site was created by the web solutions group. Just for fun and for friends to share images anonymously with each other</h4>
        </div>
        <div className="w3-row-padding w3-stretch">
                        <div className="w3-half w3-hover-lime w3-sand" style={{height:"400px"}}>
                            <div className="w3-display-container" style={{height:"400px"}}>
                                <h3 className="w3-display-middle">Send images anonymously <span>Connect with friends</span></h3>
                            </div>
                        </div>
                        <div className="w3-half w3-hover-lime w3-teal" style={{height:"400px"}}>
                            <div className="w3-display-container" style={{height:"400px"}}>
                                <h3 className="w3-display-middle">Receive images anonymously <span> Get to see those images</span></h3>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default About