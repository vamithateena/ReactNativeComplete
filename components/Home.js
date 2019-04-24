import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={
      TextInputName:'',
      TextInputEmail:'',
      TextInputPhoneNumber:''

    }

  }

      InsertUsers=()=>{
        const{TextInputName}=this.state;
        const{TextInputEmail}=this.state;
        const{TextInputPhoneNumber}=this.state;

        fetch('http://192.168.190.2/tr_reactnative/insert.php',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            name:TextInputName,
            email:TextInputEmail,
            phone_number:TextInputPhoneNumber,
          })
        }).then((response)=>response.json())
          .then((responseJson)=>{
            Alert.alert(responseJson);
          this.props.navigation.navigate('Profile')

          }).catch((error)=>{
            console.error(error);
          })
      }

      ViewUsersList=()=>{
          //<Profile/>
          this.props.navigation.navigate('Profile');
        }


        static navigationOptions = {
            title: 'Input Users',
          };


  render() {
  return (
  <View style={styles.container}>
            

        <View>
                  <TextInput
                      placeholder='Enter Name'
                      onChangeText={TextInputValue =>this.setState({TextInputName:TextInputValue})}
                      underlineColorAndroid='transparent'
                      style={styles.TextInputStyle2}/>

                  <TextInput
                      placeholder='Enter Email'
                      onChangeText={TextInputValue =>this.setState({TextInputEmail:TextInputValue})}
                      underlineColorAndroid='transparent'
                      style={styles.TextInputStyle}/>

                  <TextInput
                      placeholder='Enter Phone number'
                      onChangeText={TextInputValue =>this.setState({TextInputPhoneNumber:TextInputValue})}
                      underlineColorAndroid='transparent'
                      style={styles.TextInputStyle}/>

                  <TouchableOpacity activeopacity={.4} style={styles.TouchableOpacityStyle} onPress={this.InsertUsers}>
                      <Text style={styles.TextStyle}>SAVE</Text>
                  </TouchableOpacity>

                  <TouchableOpacity activeopacity={.4} style={styles.TouchableOpacityStyle} onPress={()=>this.props.navigation.navigate("Profile")}>
                      <Text style={styles.TextStyle}>VIEW USER</Text>
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


});
