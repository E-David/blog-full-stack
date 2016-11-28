import React from "react"
import Header from "./header"
import ACTIONS from "../actions"
import User from "../models/userModel"
import MyPostsView from "./myPostsView"

const DashboardView = React.createClass({
	render: function() {
		return (
			<div className="dashboard-view">
				<Header />
				<a href="newpost">New Post</a>
				<h3>{`Posts by ${User.getCurrentUser().email}`}</h3>
				<MyPostsView />
			</div>
		)
	}
})

export default DashboardView