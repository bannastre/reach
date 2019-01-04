import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import logo from './assets/logo.jpg'

class ChatInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = { text: '' }
	}

	render () {
		return (
			<View>
				<TextInput
					style={{height: 40}}
          placeholder="Say hello!"
          onChangeText={(text) => this.setState({text})}
				/>
				<Button title="Send!" onPress={() => {
					alert(this.state.text)
				}}/>
			</View>
		)
	}
}

class Sub extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.text}</Text>
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
				<Sub text='Hello World!'/>
				<ChatInput />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		marginTop: '10%',
		padding: 10,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	header: {
		flex: 1,
		alignItems: 'flex-end',
	},
	textInput: {

	},
	container: {
		flex: 1,
		alignItems: 'center',
	}
});
