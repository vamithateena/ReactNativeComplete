import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

export default class Feed extends React.Component {
  constructor(props){
    super(props)
    this.state={
      TextInputId:'',
      TextInputName:'',
      TextInputEmail:'',
      TextInputPhoneNumber:'',
    }
  }

  componentDidMount(){
    this.setState({
        TextInputId:this.props.navigation.state.params.id,
        TextInputName:this.props.navigation.state.params.name,
        TextInputEmail:this.props.navigation.state.params.email,
        TextInputPhoneNumber:this.props.navigation.state.params.phone_number,
    })
  }
  UpdateUsers=()=>{
    fetch('http://192.168.190.2/tr_reactnative/update.php',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
      id:this.state.TextInputId,
      name:this.state.TextInputName,
      email:this.state.TextInputEmail,
      phone_number:this.state.TextInputPhoneNumber,
      })
    }).then((response)=>response.json())
      .then((responseJson)=>{
        Alert.alert(responseJson);

      }).catch((error)=>{
        console.error(error);
      })
      this.props.navigation.navigate('Profile')
  }
  DeleteUsers=()=>{
    fetch('http://192.168.190.2/tr_reactnative/delete.php',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
      id:this.state.TextInputId
      })
    }).then((response)=>response.json())
      .then((responseJson)=>{
        Alert.alert(responseJson);

      }).catch((error)=>{
        console.error(error);
      })
      this.props.navigation.navigate('Profile')
  }
  render() {
    return (
      <View style={styles.container}>
                <View style={styles.navBar}>
                   <Text style={styles.headingTitle}>Update Users</Text>
                </View>

                <View>
                          <TextInput
                              value={this.state.TextInputName}
                              placeholder='Enter Name'
                              onChangeText={TextInputValue =>this.setState({TextInputName:TextInputValue})}
                              underlineColorAndroid='transparent'
                              style={styles.TextInputStyle2}/>

                          <TextInput
                          value={this.state.TextInputEmail}
                              placeholder='Enter Email'
                              onChangeText={TextInputValue =>this.setState({TextInputEmail:TextInputValue})}
                              underlineColorAndroid='transparent'
                              style={styles.TextInputStyle}/>

                          <TextInput
                          value={this.state.TextInputPhoneNumber}
                              placeholder='Enter Phone number'
                              onChangeText={TextInputValue =>this.setState({TextInputPhoneNumber:TextInputValue})}
                              underlineColorAndroid='transparent'
                              style={styles.TextInputStyle}/>

                          <TouchableOpacity activeopacity={.4} style={styles.TouchableOpacityStyle} onPress={this.UpdateUsers}>
                              <Text style={styles.TextStyle}>UPDATE</Text>
                          </TouchableOpacity>

                          <TouchableOpacity activeopacity={.4} style={styles.TouchableOpacityStyle2} onPress={this.DeleteUsers}>
                              <Text style={styles.TextStyle}>DELETE</Text>
                          </TouchableOpacity>
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
