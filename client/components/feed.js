import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

class Feed extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList 
          data={this.props.data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
	container: {
		flex: 1,
		alignItems: 'center',
	}
});

module.exports = Feed