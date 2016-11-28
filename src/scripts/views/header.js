import React from "react"
import User from "../models/userModel"
import ACTIONS from "../actions"

const Header = React.createClass({
	_setLoginOrLogoutButton: function(){
		if (!User.getCurrentUser()){
			return <a href="#login">Login</a>
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
					<h2>AskUsAnything</h2>
				</a>
				<div className="user-nav">
					<a href="#dashboard" style={dashDisplay}>
						<h5>My Dashboard</h5>
					</a>
					{this._setLoginOrLogoutButton()}
				</div>
			</header>
		)
	}
})

export default Header