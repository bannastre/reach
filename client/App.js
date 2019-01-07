import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Feed } from './components';
import creds from './credentials';

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={styles.page}>
				<Header />
				<Feed username={creds.username} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		marginTop: 25,
		marginBottom: 25,
		padding: 10,
		backgroundColor: '#fff'
	}
});
