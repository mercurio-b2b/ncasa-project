import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Video } from 'expo-av';

export default class App extends Component {

	constructor(props) { 
    	super(props);
	}

	render(){
	  return (
	    <View style={styles.container}>
	      <Video
			  source={ require('./assets/animated-video.mp4') }
			  rate={1.0}
			  volume={1.0}
			  isMuted={false}
			  resizeMode="cover"
			  shouldPlay
			  isLooping
			  style={{ width: 314, height: 202 }}
			/>
	    </View>
	  );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});