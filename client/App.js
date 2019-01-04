import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Feed, Input } from './components'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.page}>
				<Header />
				<Feed text='Hello World!'/>
				<Input />
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
	}
});
