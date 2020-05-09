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


class SimonLogo extends Component{
    render(){
      setTimeout(() => {this.props.navigation.navigate('Menu');}, 5000);
      return(
        <View style={styles.formContainer}>
            <Image source={require('../../assets/logo/simonLogo.png')} style={ styles.logo }/>
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
    // Simon Logo
    logo:{
      resizeMode: "contain",
      position: 'absolute',
      width: 375,
      height: 700,
    },
})

export default SimonLogo;
