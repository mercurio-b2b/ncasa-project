import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Image, Easing } from 'react-native';

const backgroundImage = require('./assets/icon.png')

export default class App extends Component {

	constructor(props) { 
    	super(props);
    	this.animatedValue = new Animated.Value(0)
    	this.handleAnimation = this.handleAnimation.bind(this);
	}

	componentDidMount() {
        this.handleAnimation();
  	}

	handleAnimation = () => {
		console.log("Animation start");
	    // A loop is needed for continuous animation
	    Animated.loop(
	      // Animation consists of a sequence of steps
	      Animated.sequence([
	        // start rotation in one direction (only half the time is needed)
	        Animated.timing(this.animatedValue, {toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true}),
	        // rotate in other direction, to minimum value (= twice the duration of above)
	        Animated.timing(this.animatedValue, {toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true}),
	        // return to begin position
	        Animated.timing(this.animatedValue, {toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true})
	      ])
	    ).start(); 
  	}
  
	render(){
	  return (
	    <View style={styles.container}>
	      <Animated.Image
			  source={backgroundImage}
			  resizeMode='contain'
			  style={{
			    transform: [{
			      rotate: this.animatedValue.interpolate({
			        inputRange: [-1, 1],
			        outputRange: ['-0.1rad', '0.1rad']
			      })
			    }]
			  }}
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