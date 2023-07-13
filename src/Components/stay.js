import React from "react";
import "./stay.css";

function Stay() {
    return ( 
        <>
        <div className="staybox">
              <div className="box2">
                <h1>
                    Stay Connected
                </h1>
              </div>
              <div className="box3">
                <h3>
                Save with our latest fares and offers. Leave us your e-mail<br></br>
                address and receive information about our special offers.
                </h3>
              </div>
     
              <div className="input2">
              <input type="type" placeholder="Type your email address"></input>
             
              <a href="/" className="email-button">
						        <button className="ebutton">Subscribe</button>
					    </a>
           
              </div>
              
        
        </div>
        </>
     );
}

export default Stay;