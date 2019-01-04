import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = { text: '' }
	}

	render () {
		return (
			<View>
				<TextInput
					style={styles.textInput}
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

const styles = StyleSheet.create({
	textInput: {
    height: 40
	}
});

module.exports = Input