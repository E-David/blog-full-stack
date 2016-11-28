import Backbone from "backbone"


export const PostModel = Backbone.Model.extend({
	urlRoot: "/api/posts",
	idAttribute: "_id"
})

export const PostCollection = Backbone.Collection.extend({
	url: "/api/posts",
	model: PostModel
})

