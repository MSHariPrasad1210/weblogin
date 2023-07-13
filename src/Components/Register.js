import React from "react";

function Register() {
	return (
		<div className="content login">
			<div className="card">
				<h1> Register </h1>
				<div className="line">
					<label htmlFor="name">
						<h2> Name: </h2>
					</label>
					<input type="text" id="name" className="inputfield" />
				</div>
				<div className="line">
					<label htmlFor="username">
						<h2> Username: </h2>
					</label>
					<input type="text" id="username" className="inputfield" />
				</div>

				<div className="line">
					<label htmlFor="email">
						<h2> E-mail: </h2>
					</label>
					<input type="text" id="email" className="inputfield" />
				</div>
				<div className="line">
					<label htmlFor="password">
						<h2> Password: </h2>
					</label>
					<input type="password" id="password" className="inputfield" />
				</div>
				<button> Register </button>
				<a href="/login" className="link-button">
					Already have an account?
				</a>
			</div>
		</div>
	);
}

export default Register;
