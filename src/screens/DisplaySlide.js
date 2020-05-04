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


class DisplaySlide extends Component{
    render(){
      return(
        <View style={styles.formContainer}>
          <Image source={require('../../assets/slides/monster2.png')} style={ styles.slide }/>
          <Image source={require('../../assets/logo/scoreboard.png')} style={ styles.scoreboard }/>
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
    // Image Slide
    slide:{
        width: 350,
        height: 350,
    },
    // score
    scoreboard:{
        width: 300,
        height: 80,
    },
})

export default DisplaySlide;