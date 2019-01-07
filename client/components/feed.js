import React from 'react';
import Input from './input';
import { StyleSheet, SectionList, Text, View } from 'react-native';

class Feed extends React.Component {
	constructor(props) {
    super(props);
    this.state = { messages: [{title: 'Beginning of Chat', data: [' ' ]}] };
    this.messageHandler = this.messageHandler.bind(this)
	}
  
	render() {
		return (
			<View style={styles.container}>
        <SectionList 
          sections={this.state.messages}
          renderItem={({item, index, section}) => <Text style={styles.item} key={index}>{item}</Text> }
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.title}>{title}</Text>
          )}
          keyExtractor={(item, index) => item + index}
        />
        <Input 
          style={styles.input} 
          handleMessage={message => this.messageHandler(message)} 
          data={this.state.messages}
          username={this.props.username}
        />
      </View>
		);
  }
  
  messageHandler(message) {
    const messages = [...this.state.messages]
    const d = new Date(Date.now());
    const timeNow = `${d.getHours()}:${d.getMinutes()}`
    messages.push({title: `At ${timeNow}, ${this.props.username} said:`, data: [message]})
    this.setState({ messages: messages })
  }
}


const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  },
  item: {
    padding: 5,
    fontSize: 14,
    height: 44,
  },
	container: {
		flex: 1,
		alignItems: 'flex-start',
  },
  input: { 
  }
});

module.exports = Feed