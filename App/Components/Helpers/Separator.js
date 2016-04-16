import React, { Component } from 'react-native';

const {
  StyleSheet,
  View,
} = React;

class Separator extends Component {
  render() {
    return (
      <View style={styles.separator} />
    );
  }
}

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15
  },
});


//export default Separator;
module.exports = Separator;
