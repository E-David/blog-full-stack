const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})

const postsSchema = new mongoose.Schema({
	username: 	{ type: String, required: true },
  userId:     { type: String, required: true },
	title: 		  { type: String, required: true },
	content: 	  { type: String, required: true },
	createdAt:  { type: Date, default: Date.now }
})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Post: mongoose.model("Post", postsSchema)
}
