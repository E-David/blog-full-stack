import Backbone from "backbone"
import _ from "underscore"
import {PostCollection,PostModel} from "./models/dataModels"

const STORE = _.extend(Backbone.Events,{
	_data: {
		postCollection: new PostCollection()
	},
	_emitChange: function() {
		this.trigger("storeChanged")
	},
	_get: function(prop) {
		return this._data[prop]
	},
	_getData: function() {
		return this._data
	},
	_set: function(input,value) {
		if(typeof input === "object") {
			var objToMerge = input
			this._data = _.extend(this._data,objToMerge)
		} else {
			var key = input
			this._data[key] = value
		}
		this._emitChange()
	}

})


export default STORE