import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

//import the background image for the start screen
const image = require('../assets/Background_Image.png');

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: ''
    };
  }

  render() {
    return (
      <ImageBackground source={image} style={styles.image}>  
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.title}>Chat App</Text>
          {/*View Container for user to input name, select color, and go to chat screen*/}
          <View style={styles.startContainer}>
            {/*create text input for user to enter name*/}
            <TextInput 
              style={styles.nameInput}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
              placeholder='Enter Name Here'
            />
            <Text style={styles.colorChoiceText}>
              Choose Background Color:
            </Text>
            {/*create buttons for user to choose background color*/}
            <View style={styles.colorContainer}>
              <TouchableOpacity 
                style={[styles.color, {backgroundColor: '#9ac8fc'}]}
                onPress={() => {
                  this.setState({color: '#9ac8fc'});
                }}
              />
              <TouchableOpacity 
                style={[styles.color, {backgroundColor: '#f2bab8'}]}
                onPress={() => {
                  this.setState({color: '#f2bab8'});
                }}
              />
              <TouchableOpacity 
                style={[styles.color, {backgroundColor: '#090C08'}]}
                onPress={() => {
                  this.setState({color: '#090C08'});
                }}
              />
              <TouchableOpacity 
                style={[styles.color, {backgroundColor: '#B9C6AE'}]}
                onPress={() => {
                  this.setState({color: '#B9C6AE'});
                }}
              />
            </View>
            {/*Note: Using Touchable Opacity instead of Button as it is better for styling*/}
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Chat', {name: this.state.name, color: this.state.color})}>
              <Text style={styles.buttonText}>Go To  Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

//Style sheets for react native components above
const styles = StyleSheet.create({
  colorContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1
  },
  startContainer: {
    flex: 1,
    width: '88%',
    height: '44%',
    backgroundColor: '#fff',
    marginBottom: 40,
    alignSelf: 'center',
    alignItems: 'center'
  },
  color: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    margin: 10,
    marginTop: 5
  },
  nameInput: {
    fontSize: 16,
    fontWeight: '300',
    width: '88%',
    height: '20%',
    marginBottom: 10,
    marginTop: 15,
    paddingLeft: 32,
    borderColor: '#757083',
    borderWidth: 1.5,
    borderRadius: 2,
    opacity: 50
  },
  colorChoiceText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#757083',
    width: '88%',
    height: '21%',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    flex: 1, 
    fontSize: 45, 
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    marginTop: '20%',
  },
});
