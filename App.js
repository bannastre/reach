import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import logo from './assets/logo.jpg'

class Sub extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Hello World!</Text>
				<Button title="Send!" onPress={() => {
					alert('You clicked me!')
				}}/>
			</View>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<View style={styles.header}>
				<Image source={logo} style={{width: 60, height: 60}} />
			</View>

		)
	}
}

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.page}>
				<Header />
				<Sub />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		marginTop: '10%',
		padding: '5%',
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	header: {
		flex: 1,
		alignItems: 'flex-end',
	},
	container: {
		flex: 1,
		alignItems: 'center',
	}
});
