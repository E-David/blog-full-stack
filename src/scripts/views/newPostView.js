import React from "react"
import ACTIONS from "../actions"
import Header from "./header"

const NewPostView = React.createClass({
	render: function() {
		return (
			<div className="new-post-view">
				<Header />
				<NewPostContainer />
			</div>
		)
	}
})

const NewPostContainer = React.createClass({
	_handleSubmit: function(event) {
		event.preventDefault()
		var newPostObj = {
			title: event.target.title.value,
			content: event.target.content.value
		}
		ACTIONS.createPost(newPostObj)
	},
	render: function() {
		return (
			<div className="new-post-container">
				<form onSubmit={this._handleSubmit}>
					<input className="post-title" name="title"/>
					<input className="post-content" name="content" />
					<button type="submit">Post</button>
				</form>
			</div>
		)
	}
})

export default NewPostView