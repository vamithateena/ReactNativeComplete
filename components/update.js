import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

export default class update extends React.Component {


  render() {
    return (
      <View style={styles.container}>
                <View style={styles.navBar}>
                   <Text style={styles.headingTitle}>Update Users</Text>
                </View>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems:'center',
      marginTop:5,
      backgroundColor:'#fff'
},


navBar: {
  height: 55,
  backgroundColor: 'white',
  elevation: 3,
  paddingHorizontal: 15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
},
headingTitle:{
  fontSize:25,
  color:'black',

},
TextInputStyle:{
  textAlign:'center',
  marginBottom:7,
  height:40,
  alignSelf: 'stretch',
  borderWidth:1,
  margin:10,
  borderRadius:5,
  borderColor:'#FF5722',

},

TextInputStyle2:{
  textAlign:'center',
  marginTop:20,
  marginBottom:7,
  height:40,
  alignSelf: 'stretch',
  borderWidth:1,
  margin:10,
  borderRadius:5,
  borderColor:'#FF5722',

},
TextStyle:{
  color:'#fff',
  textAlign:'center',

},

TouchableOpacityStyle:{
  paddingTop:10,
  paddingBottom:10,
  borderRadius:5,
  marginBottom:7,
  height:40,
  margin:10,
  alignSelf: 'stretch',
  backgroundColor:'#00BCD4',
  top:180,
},

TouchableOpacityStyle2:{
  paddingTop:10,
  paddingBottom:10,
  borderRadius:5,
  marginBottom:7,
  height:40,
  margin:10,
  alignSelf: 'stretch',
  backgroundColor:'#FF5722',
  top:180,
},


});
