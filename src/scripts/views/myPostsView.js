import React from "React"
import STORE from "../store"
import ACTIONS from "../actions"
import Header from "./header"

const MyPostsView = React.createClass({
	componentWillMount: function() {
		STORE.on("storeChanged", ()=> {
			this.setState(STORE._getData())
		})
		ACTIONS.fetchUserPosts()
	},
	getInitialState: function() {
		console.log("STORE: ",STORE)
		return STORE._getData()
	},
	componentWillUnmount: function() {
		STORE.off("storeChanged")
	},
	render: function() {
		return (
			<div className="home-view">
				<Header />
				<PostsContainer collection={this.state.postCollection}/>
			</div>
		)
	}
})

const PostsContainer = React.createClass({
	_makePosts: function(postModel) {
		if(postModel) {
			return <PostModel model={postModel} key={postModel.cid} />
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
	render: function() {
		var postModel = this.props.model
		return (
			<li>
				<span>{`Post by: ${postModel.get("username")}`}</span>
				<span>{postModel.get("title")}</span>
				<span>{postModel.get("content")}</span>
				<span>+</span>
			</li>
		)
	}
})

export default MyPostsView