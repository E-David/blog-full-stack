import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import LoginView from "./views/loginView"
import HomeView from "./views/homeView"
import NewPostView from "./views/newPostView"
import DashboardView from "./views/dashboardView"
import User from "./models/userModel"


const app = function() {
  const Router = Backbone.Router.extend({
  	routes: {
  		"login": "handleLogin",
  		"dashboard": "handleDashboard",
  		"newpost": "handleNewPost",
  		"home": "handleHome",
  		"myposts": "handleMyPosts",
  		"*default": "handleRedirect"
  	},
	handleLogin: function() {
		ReactDOM.render(<LoginView />, document.querySelector(".container"))
	},
	handleDashboard: function() {
		ReactDOM.render(<DashboardView />, document.querySelector(".container"))
	},
	handleNewPost: function() {
		ReactDOM.render(<NewPostView />, document.querySelector(".container"))
	},
	handleHome: function() {
		ReactDOM.render(<HomeView />, document.querySelector(".container"))
	},
	handleMyPosts: function() {
		ReactDOM.render(<MyPostsView />, document.querySelector(".container"))
	},
	handleRedirect: function() {
		location.hash = "home"
	},
	initialize: function() {
		Backbone.history.start()
		if(!User.getCurrentUser()){
			location.hash = "login"
		}
	}
  })

  new Router()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..