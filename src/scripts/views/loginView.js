import React from "react"
import ACTIONS from "../actions"
import Header from "./header"

const LoginView = React.createClass({
	render: function() {
		return (
			<div className="login-view">
				<Header />
				<LoginContainer />
				<RegisterContainer />
			</div>

		)
	}
})

const LoginContainer = React.createClass({
	_handleSubmit: function(event) {
		event.preventDefault()
		var userEmail = event.target.email.value,
			userPassword = event.target.password.value

		ACTIONS.loginUser(userEmail,userPassword)
		//clear fields after data is passed to ACTIONS
		event.target.email.value = ""
		event.target.password.value = ""
	},
	render: function() {
		return (
			<div className="login-container">
				<h4>Login Here</h4>
				<form onSubmit={this._handleSubmit}>
					<input type="email" name="email" placeholder="Enter Email" />
					<input type="password" name="password" placeholder="Enter Password" />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})

const RegisterContainer = React.createClass({
	_handleSubmit: function(event) {
		event.preventDefault()
		var userInputObj = {
			email: event.target.email.value,
			password: event.target.password.value
		}
		ACTIONS.registerUser(userInputObj)
		//clear fields after data is passed to ACTIONS
		event.target.email.value = ""
		event.target.password.value = ""
	},
	render: function() {
		return (
			<div className="register-container">
				<h4>Register Here</h4>
				<form onSubmit={this._handleSubmit}>
					<input type="email" name="email" placeholder="Enter Email" />
					<input type="password" name="password" placeholder="Enter Password" />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
})

export default LoginView