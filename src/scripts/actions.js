import STORE from "./store"
import User from "./models/userModel"
import {PostModel,PostCollection} from "./models/dataModels"

const ACTIONS = {
	createPost: function(postObj) {
		var currentUser = User.getCurrentUser()
		postObj.userId = currentUser._id
		postObj.username = currentUser.email
		STORE._get("postCollection").add(postObj)

		var postModel = new PostModel(postObj)
		postModel.save()
				 .fail(
				 	function(err){
				 		alert("failed to make post.")
				 		console.log(err)
				 	}
				 )
		STORE._emitChange()
	},
	fetchAllPosts: function() {
		var postColl = new PostCollection()
		postColl.fetch()
				.then(
					function(){
						STORE._set({
							postCollection: postColl
						})
					},
					function(err){
						alert("An error occurred while fetching all posts")
						console.log(err)
					}
				)
	},
	fetchUserPosts: function() {
		var postColl = new PostCollection()
		postColl.fetch({
			data: {
				userId: User.getCurrentUser()._id
			}
		})
				.then(
					function(){
						STORE._set({
							postCollection: postColl
						})
					},
					function(err){
						alert("An error occurred while fetching all posts")
						console.log(err)
					}
				)
	},
	loginUser: function(email,password) {
		User.login(email,password)
			.then(
				function(resp){
					alert(`Logged in as ${email}`)
					location.hash = "dashboard"
				},
				function(err){
					console.log(err)
					alert("An error occurred while logging in")
				}
			)
	},
	logoutUser: function() {
		User.logout()
			.then(
				function(){
					alert("You have successfully logged out")
					location.hash = "home"
				},
				function(){
					alert("An error occurred while logging out")
				}
			)
	},
	registerUser: function(userInputObj) {
		User.register(userInputObj)
			.then(
				function(resp){
					alert(`${userInputObj.email} has successfully registered`)
				},
				function(err){
					console.log(err)
					alert("An error occured while registering")
				}
			)
	},
	removePost: function(postModel) {
		console.log(postModel)
		postModel.destroy()
				 
		STORE._emitChange()
	}
}

export default ACTIONS