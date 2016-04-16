var FirebaseUtil = require('./FirebaseUtil');

var api = {

	getBio(username){
	 	username = username.toLowerCase().trim();
		var url = `https://api.github.com/users/${username}`;
		console.log("Getting Bio:",url);
		return fetch(url).then((res) => res.json())
	},

	getRepo(username){
		username = username.toLowerCase().trim();
		var url = `https://api.github.com/users/${username}/repos`;
		return fetch(url).then((res) =>  res.json())
	},
	getNotes(username){
		username = username.toLowerCase().trim();
		var url = `https://gitshiv.firebaseio.com/users/${username}/notes.json`;
		return fetch(url).then((res) => res.json());
	},
	addNote(username, note){
		 username = username.toLowerCase().trim();
	    var url = `https://gitshiv.firebaseio.com/users/${username}/notes.json`;
	    return fetch(url, {
	      method: 'post',
	      body: JSON.stringify(note)
	    }).then((res) => res.json());
	}
};

module.exports = api;