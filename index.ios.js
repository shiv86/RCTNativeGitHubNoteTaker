/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 var Main = require('./App/Components/Main').default;

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';



class githubNotetaker extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GitHub NoteTaker',
          component: Main,
          backButtonTitle: 'Back'
        }}
        backButtonTitle='Back'
         />
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
