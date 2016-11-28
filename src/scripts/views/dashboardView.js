import React from "react"
import Header from "./header"
import ACTIONS from "../actions"
import User from "../models/userModel"

const DashboardView = React.createClass({
	render: function() {
		return (
			<div className="dashboard-view">
				<Header />
				<div className="dashboard-nav">
					<a href="#home">
						<h5>See All Posts</h5>
					</a>
					<a href="#newpost">
						<h5>Make New Post</h5>
					</a>
					<a href="#myposts">
						<h5>See My Posts</h5>
					</a>
					<button id="logout" onClick={ACTIONS.logoutUser}>Logout</button>
				</div>
				<h2>{`Welcome page for ${User.getCurrentUser().email}`}</h2>
			</div>
		)
	}
})

export default DashboardView