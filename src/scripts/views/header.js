import React from "react"

const Header = React.createClass({
	render: function() {
		return (
			<header>
				<a href="#home">
					<h2>AskUsAnything</h2>
				</a>
				<a href="#login">
					<h5>Login/Register</h5>
				</a>
				<a href="#dashboard">
					<h5>Dashboard</h5>
				</a>
			</header>
		)
	}
})

export default Header