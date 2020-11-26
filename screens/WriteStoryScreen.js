import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Alert
} from 'react-native';

import * as Permissions from 'expo-permissions';

  const showAlert = () =>{
     Alert.alert(
        'Thank You For Submitting! 😉📚'
     )
  }

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Image
            source = {require('../assets/BookHeader.jpg')}
            style= {{width:100, height:100}}/>
          </View>
           
        <Text style={{textAlign:'center', fontSize:30, fontWeight: "bold"}}>Story Hub</Text>
        <View style={styles.inputView}>
         <TextInput style={styles.inputBox} placeholder="Story Title"/>
         </View>
         <View style={styles.inputView}>
             <TextInput style={styles.inputBox} placeholder="Author"/>
            </View>
            
  <View style={styles.inputView}>
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Write Your Story"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
</View>

    <View>
       <TouchableOpacity onPress={showAlert}
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
   </View> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputBox:{
    width: 300,
    height: 30,
    borderWidth: 1.5,
    fontSize: 20,
    marginTop: 5
  },
  inputView:{
    flexDirection: 'row',
    margin: 5
  },
  textArea: {
    height: 150,
    width : 300,
    borderWidth: 1.5,
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:30,
    marginTop: 30
  },
  submitButtonText:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight:"bold",
    marginTop:5,
    color: 'white'
  }
});
