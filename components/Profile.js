import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator, ListView,Alert} from 'react-native';

export default class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isLoading:true
    }
  }

  componentDidMount(){
    return fetch('http://192.168.190.2/tr_reactnative/view_users.php')
        .then((response)=>response.json())
        .then((responseJson)=>{
          let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
            this.setState({
              isLoading:false,
              dataSource:ds.cloneWithRows(responseJson)
            },function(){})
        }).catch((error)=>{
          console.error(error);
        })
  }

  Action_Click(id, name, email, phone_number){
    this.props.navigation.navigate('Feed',{
      id:id,
      name:name,
      email:email,
      phone_number:phone_number
    })


  }
  ListViewItemSeparator=()=>{
    return(
      <View
        style={{
          height:3,
          width:180,
          backgroundColor:'#2196F3'
        }}
      />
    )
  }


  static navigationOptions = {
      title: 'Display Users',
    };


  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex:1,paddingTop:20}}>
        <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
                // <View style={styles.navBar}>
                //    <Text style={styles.headingTitle}>Display Users</Text>
                // </View>
                <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderSeparator={this.ListViewItemSeparator}
                    renderRow={(rowData)=>
                      <Text style={styles.rowViewContainer} onPress={this.Action_Click.bind(this,
                          rowData.id,
                          rowData.name,
                          rowData.email,
                          rowData.phone_number
                      )}>
                          {rowData.name}
                      </Text>
                    }
                />
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

rowViewContainer:{
  textAlign:'center',
  fontSize:20,
  paddingTop:10,
  paddingRight:10,
  paddingBottom:10,
}
});
