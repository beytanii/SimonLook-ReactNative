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


class Menu extends Component{
  constructor() {
    super();
    this.state = {
      score: 0,
      slides: null,
    };
}
    render(){
      return(
        <View style={styles.formContainer}>
          {/* settings Button */}
          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
            <Image source={require('../../assets/buttons/settings.png')} style={ styles.settings }/>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DisplaySlides')}>
            <Image source={require('../../assets/buttons/startBtn.png')} style={ styles.startBtn }/>
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
    // start button
    startBtn:{
        width: 230,
        height: 70,
    },
    // settings
    settings:{
        width: 40,
        height: 40,
    },
})

export default Menu;
