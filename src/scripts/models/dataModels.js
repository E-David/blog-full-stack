import Backbone from "backbone"


export const PostModel = Backbone.Model.extend({
	urlRoot: "/api/posts"
})

export const PostCollection = Backbone.Collection.extend({
	url: "/api/posts",
	model: PostModel
})

