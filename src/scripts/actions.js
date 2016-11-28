import STORE from "./store"
import User from "./models/userModel"
import {PostModel,PostCollection} from "./models/dataModels"

const ACTIONS = {
	createPost: function(postObj) {
		var currentUser = User.getCurrentUser()
		console.log(currentUser._id)
		postObj.userId = currentUser._id
		postObj.username = currentUser.email
		STORE._get("postCollection").add(postObj)

		var postModel = new PostModel(postObj)
		postModel.save()
				 .then(
				 	function(){
				 		location.hash = "home"
				 	},
				 	function(err){
				 		alert("failed to make post.")
				 		console.log(err)
				 	}
				 )
	},
	getTimeCreated: function(timePostCreated) {
		var then = new Date(timePostCreated),
			now = new Date(),
			millisecondsElapsed = (now-then)

		return this.getTimeFromMilliseconds(millisecondsElapsed)
	},
	getTimeFromMilliseconds: function(milliseconds) {
		var seconds = Math.floor(milliseconds / 1000),
			minutes = Math.floor(seconds / 60),
			hours = Math.floor(minutes / 60),
			days = Math.floor(hours / 24),
			weeks = Math.floor(days / 7),
			years = Math.floor(weeks / 52)

		if(seconds < 60){
			return seconds + "s"
		} else if(minutes < 60){
			return minutes + "m"
		} else if(hours < 24){
			return hours + "h"
		} else if(days < 7){
			return days + "d"
		} else if(weeks < 52){
			return weeks + "w"
		} else {
			return years + "y"
		}
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
		console.log(User.getCurrentUser()._id)
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
					STORE._emitChange()
				},
				function(){
					alert("An error occurred while logging out")
				}
			)
	},
	registerUser: function(userInputObj) {
		User.register(userInputObj)
			.then(
				function(){
					alert(`${userInputObj.email} has successfully registered`)
				},
				function(err){
					console.log(err)
					alert("An error occured while registering")
				}
			)
	},
	removePost: function(postModel) {
		postModel.destroy()
				 .then(
				 	function(){
				 		alert("Post successfully removed")
				 	},
				 	function(err){
				 		alert("An error occurred while removing the post")
				 		console.log(err)
				 	})
	},
	setFocusPost: function(modelId) {
		STORE._set("focusPost",modelId)
	}
}

export default ACTIONS