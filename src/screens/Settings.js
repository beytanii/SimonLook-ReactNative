import * as React from 'react';
import { Component} from 'react';
import { Button, 
      View, 
      Text, 
      StyleSheet,
      Image, 
      TextInput,
      Animated,
      TouchableOpacity
} from 'react-native';


class Settings extends Component{
    render(){
      return(
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
            <Image source={require('../../assets/buttons/home.png')} style={ styles.settings }/>
          </TouchableOpacity>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
    // screen contaainer
    formContainer:{
      flex: 1, 
      padding: 20,
      backgroundColor: "#2c3e50",
      justifyContent: 'center',
      alignItems: "center",
    },
    // settings
    settings:{
        width: 40,
        height: 40,
    },
})

export default Settings;