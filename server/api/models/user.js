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
		unique: true,
		match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
	blocked: {
        type: Boolean,
        default: false,
    },
	dateOfLastUpdate: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('User', userSchema);