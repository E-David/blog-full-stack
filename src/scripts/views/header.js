import React from "react"
import User from "../models/userModel"
import ACTIONS from "../actions"

const Header = React.createClass({
	_dashboardHashChange: function() {
		location.hash = "dashboard"
	},
	_loginHashChange: function() {
		location.hash = "login"
	},
	_setLoginOrLogoutButton: function(){
		if (!User.getCurrentUser()){
			return <button id="login" onClick={this._loginHashChange}>Login</button>
		} else {
			return <button id="logout" onClick={ACTIONS.logoutUser}>Logout</button>
		}
	},
	render: function() {
		var dashDisplay = {
			display: User.getCurrentUser() ? "block" : "none"
		}
		return (
			<header>
				<a href="#home">
					<h1>Lorem Ipsum Blog Site</h1>
				</a>
				<div className="user-nav">
					<button onClick={this._dashboardHashChange} style={dashDisplay}>My Dashboard</button>
					{this._setLoginOrLogoutButton()}
				</div>
			</header>
		)
	}
})

export default Header