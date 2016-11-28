import React from "React"
import STORE from "../store"
import ACTIONS from "../actions"

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
					{this.props.collection.map(this._makePosts)}
				</ul>
			</div>
		)
	}
})

const PostModel = React.createClass({
	_togglePost: function() {
		ACTIONS.setFocusPost(this.props.model.get("_id"))
	},
	render: function() {
		var postModel = this.props.model
		var focusPostStyle = {
			height: postModel.get("_id") === this.props.focusPost ? "auto" : 0
		}
		return (
			<li>
				<div className="post-header" onClick={this._togglePost}>
					<h3>{postModel.get("title")}</h3>
					<div className="post-details">
						<h4>{`Post by ${postModel.get("email")}`}</h4>
						<h4>{ACTIONS.displayTimeCreated(postModel.get("createdAt"))}</h4>
					</div>
					<button>+</button>
				</div>
				<p className="post-content" style={focusPostStyle}>{postModel.get("content")}</p>
			</li>
		)
	}
})

export default PostsContainer