import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import io from 'socket.io-client';

const socketHost = 'http://127.0.0.1:3000/'

const socket = io.connect(socketHost);
console.log("​Socket", socket.connected)

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = { text: '' }
		this.props = props
		this.send = this.send.bind(this)
	}

	render () {
		return (
			<View style={styles.input}>
				<TextInput
					style={styles.textInput}
          placeholder="Say hello!"
          onChangeText={(text) => this.setState({text})}
				/>
				<Button title="Send!" onPress={() => {
					this.send()
				}}/>
			</View>
		)
	}

	send() {
		socket.emit('chat', this.state.text, this.props.username)
	}

}

const styles = StyleSheet.create({
	input: {
		flex: 1,
		flexDirection: 'column'
	},
	textInput: {
    height: 40
	}
});

module.exports = Input

