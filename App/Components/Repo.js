import React, { Component } from 'react-native';
var Separator = require('./Helpers/Separator');
var Badge = require('./Badge');
var WebViewHelper = require('./Helpers/WebViewHelper.js');

const {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight
} = React;

class Repo extends Component {

  openPage(url){
  	this.props.navigator.push({
  		title: 'Web View',
  		component: WebViewHelper,
  		passProps: {url}
  	});
  } 	



  render() {
  	var list = this.props.repoInfo.map((item,index) => {
  		var repoInfo = this.props.repoInfo;
  		var desc = repoInfo[index].description ? <Text style={styles.description}> {repoInfo[index].description} </Text> : <View/>;
  		return (
  			<View key={index}>
  				<View style={styles.rowContainer}>

  					<TouchableHighlight
  					  onPress={this.openPage.bind(this,repoInfo[index].html_url)}
  					  style={styles.rowContainer}
  					  underlayColor='transparent'>
  					  	<Text style={styles.name}>{repoInfo[index].name}</Text>  					  
  					</TouchableHighlight>

  					<Text style={styles.stars}>Stars: {repoInfo[index].stargazers_count}</Text>
	  				{desc}


  				</View>
  				<Separator/>
  			</View>
  			)
  	});
  	return (
		<ScrollView style={styles.container}>
		  <Badge userInfo = {this.props.userInfo} />
		  	{list}
		</ScrollView>
  	)
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});


Repo.propTypes = {
	userInfo: React.PropTypes.object.isRequired,
	repoInfo: React.PropTypes.array.isRequired
}


module.exports = Repo;
