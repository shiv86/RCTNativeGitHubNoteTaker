var Firebase = require('firebase');

var FirebaseUtil = {



	getDefaultRef(){
		var ref = null;
		if(ref){
			return ref;
		} else {
			ref = new Firebase('https://gitshiv.firebaseio.com/');
		}
		return ref;
	},

	getUsersRef(username){
		return this.getDefaultRef().child('users').child(username);
	},

	getNotesRef(username){
		return this.getUsersRef(username).child('notes');
	}


}

module.exports = FirebaseUtil;