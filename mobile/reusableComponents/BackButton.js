import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
import { withNavigation } from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

const Dimensions = React.Dimensions || require('Dimensions')
const {width, height} = Dimensions.get('window');
const vh = height/100;
const vw = width/100;

const backButton = StyleSheet.create({
  back: {
    marginTop: 2*vh,
    marginLeft:2*vw,
    color: '#3E8CF1',
    fontSize: 16
  }
});


export default class BackButton extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
    };
  }

  goBack = () => {
    console.log('goBack function is running! props: ', this.props)
    if (this.props.navigator.getCurrentIndex() > 0) {
      this.props.navigator.pop();
    }
  }

  render() {
    return (
      <View>
        <Text onPress={this.goBack} style={backButton.back}>
          <FontAwesome name={'chevron-left'} left={20} color={'#3E8CF1'} size={16}></FontAwesome>
          <Text>  Go back</Text>
        </Text>
      </View>
    ) 
  }
}