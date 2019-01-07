import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import io from 'socket.io-client';

const socketHost = 'http://127.0.0.1:3000/'

const socket = io.connect(socketHost);
console.log("​Socket", socket.connected)

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
		this.send = this.send.bind(this);
	}

	render () {
		return (
			<View style={styles.view}>
				<TextInput
					style={styles.textInput}
          placeholder="Say hello!"
          onChangeText={(text) => this.setState({text})}
				/>
				<Button title="Send!" onPress={() => this.send()}/>
			</View>
		)
	}

	udpateMessageHandler(msg) {
		this.props.handleMessage(msg)
	}

	send() {
		this.udpateMessageHandler(this.state.text)
		socket.emit('chat message', this.state.text, { user: this.props.username })
	}
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: 'row'
	},
	textInput: {
		flex: 1,
		height: 40,
		alignItems: 'flex-end',
	}
});

module.exports = Input

