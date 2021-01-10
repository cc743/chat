import React from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet} from 'react-native';

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
    let name = this.props.route.params.name; //the name prop passed down from 'Start.js'
    let color = this.props.route.params.color;  //the color prop passed down from 'Start.js' 

    this.props.navigation.setOptions({title: name});  //set the app's header text from 'name' (line 17) 

    return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: color}}>  
      {/*Note: background color is set to 'color' (line 18)*/}
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '88%', alignSelf: 'center'}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='Start Typing Here'
        />
        <Text style={{marginLeft: '6%'}}>You wrote: {this.state.text}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            this.alertMyText({text: this.state.text});
          }}  
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0062ff',
    width: '25%',
    height: '5%',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  },
});
