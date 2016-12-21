import React from "React"
import STORE from "../store"
import ACTIONS from "../actions"
import User from "../models/userModel"

const PostsContainer = React.createClass({
	_makePosts: function(postModel) {
		if(postModel) {
			return <PostModel model={postModel} key={postModel.cid} focusPost={this.props.focusPost} />
		} else {
			//need to find a way to implement this when no models are found
			return <h2>There doesn't seem to be anything here</h2>
		}
	},
	render: function() {
		return (
			<div className="posts-container">
				<ul className="post-list">
					{this.props.collection.map(this._makePosts).reverse()}
				</ul>
			</div>
		)
	}
})

const PostModel = React.createClass({
	_deleteButton: function() {
		var user = User.getCurrentUser()
		console.log(user)
		console.log(user._id,this.props.model.get("_id"))
		if (user && user._id === this.props.model.get("userId")) return <button onClick={this._removePost}>Delete</button>
	},
	_removePost: function() {
		ACTIONS.removePost(this.props.model)
	},
	_togglePost: function() {
		ACTIONS.setFocusPost(this.props.model.get("_id"))
	},
	render: function() {
		var postModel = this.props.model
		console.log(postModel)
		var focusPostStyle = {
			height: postModel.get("_id") === this.props.focusPost ? "auto" : 0,
			display: postModel.get("_id") === this.props.focusPost ? "block" : "none"
		}
		return (
			<li>
				<div className="post-header">
					<h3>{postModel.get("title")}</h3>
					<div className="post-details">
						<p>{`Post by ${postModel.get("username")}`}</p>
						<p>{
							`Created ${ACTIONS.getTimeCreated(postModel.get("createdAt"))} ago`
							}
						</p>
					</div>
					{this._deleteButton()}
					<button onClick={this._togglePost}>Expand</button>
				</div>
				<p className="post-content" style={focusPostStyle}>{postModel.get("content")}</p>
			</li>
		)
	}
})

export default PostsContainer