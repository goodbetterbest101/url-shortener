var mongoose = require('mongoose');

var urlSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true
	},
	surl: {
		type: String
	}
});

var counterSchema = new mongoose.Schema({
	url_count: String,
	count: Number
});

mongoose.model('Url', urlSchema);
mongoose.model('Counter', counterSchema);