import React, { Component } from 'react-native';
var Profile = require('./Profile').default;
var api = require('../Utils/api');
var Repo = require('./Repo');
var Notes = require('./Notes');

const {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} = React;

class Dashboard extends Component {


	componentDidMount() {
	   api.getRepo(this.props.userInfo.login).then((res) => {
	 		this.setState({
	 			repoInfo: res
	 		})
		});
	
	   api.getNotes(this.props.userInfo.login)
	      .then((jsonRes) => {
	        jsonRes = jsonRes || {};
	        this.setState({
	        	notesInfo: jsonRes
	        });
	      });
	}
   
	makeBackground(btn){

		var obj = {
			flexDirection: 'row',
			alignSelf: 'stretch',
			justifyContent: 'center',
			flex: 1
		}

		if (btn === 0 ){
			obj.backgroundColor = "#48BBEC";
		} else if ( btn === 1) {
			obj.backgroundColor = "#E77AAE";
		} else if ( btn === 2 ) {
			obj.backgroundColor = "#758BF4";
		}

		return obj;
	}


	gotoProfile(){
		this.props.navigator.push({
			title: "Profile",
			component: Profile,
			passProps: {userInfo: this.props.userInfo},
		});
	}

	gotoRepo(){
		this.props.navigator.push({
				title: "Repos",
				component: Repo,
				passProps: {userInfo: this.props.userInfo, repoInfo: this.state.repoInfo},
		});
	}


	gotoNote(){
		//console.log(this.props.userInfo.login);
		//api.addNote(this.props.userInfo.login,"e");

		//api.getNotes(this.props.userInfo.login).then((res) => console.log(res.notes));


		
		this.props.navigator.push({
			title: "Notes",
			component: Notes,
			passProps: { userInfo: this.props.userInfo , notesInfo: this.state.notesInfo }
		}); 
	}


	render() {
	    return (
	      <View style={styles.container}> 
	      	<Image
	      	  style={styles.image}
	      	  source={{uri: this.props.userInfo.avatar_url}} />

	      	<TouchableHighlight
	      	   onPress={this.gotoProfile.bind(this)}
	      	   style={this.makeBackground(0)}
	      	   underlayColor='#88D4F5'>
	      	   <Text style={styles.buttonText}> View Profile </Text>
	      	 </TouchableHighlight> 
	      	 
	      	 <TouchableHighlight
	      	   onPress={this.gotoRepo.bind(this)}
	      	   style={this.makeBackground(1)}
	      	   underlayColor='#88D4F5'>
	      	   <Text style={styles.buttonText}> View Repo </Text>
	      	 </TouchableHighlight> 
	      	
	      	<TouchableHighlight
	      	   onPress={this.gotoNote.bind(this)}
	      	   style={this.makeBackground(2)}
	      	   underlayColor='#88D4F5'>
	      	   <Text style={styles.buttonText}> View Notes </Text>
	      	 </TouchableHighlight> 
	      </View>
	    );
  	}
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});


export default Dashboard;
