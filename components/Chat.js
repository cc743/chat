import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  alertMyText (input = []) {
    Alert.alert(input.text);
  }

  render() {
    let name = this.props.route.params.name;
    let color = this.props.route.params.color

    this.props.navigation.setOptions({title: name});

    return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: color}}>
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '88%', alignSelf: 'center'}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='Start Typing Here'
        />
        <Text style={{marginLeft: '6%'}}>You wrote: {this.state.text}</Text>
        <Button 
          title="Send"
          onPress={() => {
            this.alertMyText({text: this.state.text});
          }}  
        />
      </View>
    )
  }
}
