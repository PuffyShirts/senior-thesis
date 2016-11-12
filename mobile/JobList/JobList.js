import React from 'react';
import fakeJobData from './fakeJobData.js';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import SearchBar from './searchBar.js'


// Get 'vh' for stylesheet. 1*vh represents 1% of the height of the viewport
const Dimensions = React.Dimensions || require('Dimensions')
const {width, height} = Dimensions.get('window');
const vh = height/100;
const vw = width/100;

// create stylesheet object
const jobStyles = StyleSheet.create({
  jobTypeBar: {
    height: 7*vh,
    backgroundColor: 'white',
    width: 100*vw
  },
  jobTypeText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20
  }
});

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return(
      <View>
        <SearchBar/>
        <View style={jobStyles.jobTypeBar}>
          <Text style={jobStyles.jobTypeText}> State searchText: </Text>
        </View>
      </View>
    )
  }
}


export default JobList;
