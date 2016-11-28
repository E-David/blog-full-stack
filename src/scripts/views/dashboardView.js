import React from "react"
import Header from "./header"
import ACTIONS from "../actions"
import User from "../models/userModel"
import MyPostsView from "./myPostsView"

const DashboardView = React.createClass({
	_newPostHashChange: function() {
		location.hash = "newpost"
	},
	render: function() {
		return (
			<div className="dashboard-view">
				<Header />
				<div className="dashboard-body">
					<button onClick={this._newPostHashChange}>New Post</button>
					<h3>{`Posts by ${User.getCurrentUser().email}`}</h3>
					<MyPostsView />
				</div>
			</div>
		)
	}
})

export default DashboardView