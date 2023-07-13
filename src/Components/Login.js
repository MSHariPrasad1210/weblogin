import React from "react";
import "./login.css";
import { TextField } from "@mui/material";
import loginimg from "./image/login.avif";
function Login() {
	return (
		<div className="loginbox">
			<div className="logincard">
			     <div className="loginimg">
				    <img src={loginimg} alt="login" height={300}/>
			     </div>
			    <div className="loginform">
					<center>
				    <h1>Login</h1>
					<br></br>
				    <TextField id="outlined-basic" label="Username" variant="outlined" />
					<br></br>
				    <TextField id="outlined-basic" label="Password" variant="outlined" />
					<br></br>
				    <button variant="contained" >Login</button>
				    <a href="/register" className="link-button">
					    Create a new Account
				    </a>
					</center>
				</div>
			</div>
		</div>
		
	);
}
export default Login;
