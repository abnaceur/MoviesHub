let mongoose = require('mongoose');

// User schema
let userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	googleId: {
		type: String,
		default: "",
	},
	imageUrl: String, 
	firstname:{
		type: String,
		default: "",
	},
	lastname: {
		type: String,
		default: "",
	},
	pseudonyme: {
		type: String,
		default: "",
	},
	email: {
		type: String,
		required: true,
	},
	name: {
		required: true,
		type: String,
	},
	givenName: {
		required: true,
		type: String,
	},
	familyName: {
		required: true,
		type: String,
	},
	password: {
		required: true,
		type: String,
		default: "",
	},
	status: {
		type: String,
		default: "",
	},
	dateOfCreation: {
		type: Date,
		default: Date.now,
	},
	dateOfLastUpdate: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('User', userSchema);