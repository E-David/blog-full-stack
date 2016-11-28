import React from "React"
import STORE from "../store"
import ACTIONS from "../actions"
import Header from "./header"
import PostsContainer from "./postsContainer"

const HomeView = React.createClass({
	componentWillMount: function() {
		STORE.on("storeChanged", ()=> {
			this.setState(STORE._getData())
		})
		ACTIONS.fetchAllPosts()
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
				<PostsContainer collection={this.state.postCollection} focusPost={this.state.focusPost}/>
			</div>
		)
	}
})

export default HomeView