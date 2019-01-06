import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logo from '../assets/logo.jpg'

class Header extends React.Component {
	render() {
		return (
			<View style={styles.header}>
				<Image source={logo} style={{width: 60, height: 60}} />
			</View>

		)
	}
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		alignItems: 'flex-end',
	}
});

module.exports = Header