import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Feed extends React.Component {
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	}
});

module.exports = Feed