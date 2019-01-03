import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Sub extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Hello World!</Text>
				<Button title="Little Button" onPress={() => {}}>Click Me</Button>
			</View>
		);
	}
}

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Sub />
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
