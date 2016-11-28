import React from "React"
import STORE from "../store"
import ACTIONS from "../actions"
import PostsContainer from "./postsContainer"

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
			<div className="my-posts-view">
				<PostsContainer collection={this.state.postCollection} focusPost={this.state.focusPost}/>
			</div>
		)
	}
})

export default MyPostsView