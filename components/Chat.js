import React from 'react';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {StyleSheet, View, Platform, KeyboardAvoidingView} from 'react-native';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    //setting the states with two static messages in order to see UI elements immediately
    this.setState({
      messages: [
        {
          _id: 2,
          text: "What's up developer?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 1,
          text: `Hello ${this.props.route.params.name}`,          //Note use of backticks
          createdAt: new Date(),
          system: true,             //this message is a system message
        },
      ],
    })
  }

  //custome function onSend: message sent by user gets appended to the state **messages** (line 9)
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  //The renderBubble function changes the color of the chat's speech bubble to black (line 68)
  renderBubble(props) {
    return (
      <Bubble 
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  }

  render() {
    let name = this.props.route.params.name; //the name prop passed down from 'Start.js'
    let color = this.props.route.params.color;  //the color prop passed down from 'Start.js' 

    this.props.navigation.setOptions({title: name});  //set the app's header text from 'name' (line 17) 

    return (
      <View style={[styles.view , {backgroundColor: color}]}> 
        {/* Code for rendering messages...questiion: what does bind(this) do?*/}
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {/* Using KeyboardAvoidingView to resolve Android-specific keyboard issue */}
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
});
