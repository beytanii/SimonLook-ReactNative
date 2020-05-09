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
import Menu from './Menu';

class GameOver extends Component{
    render(){
      return(
        <View style={styles.gameOverFlex}>
          <View><Image source={require('../../assets/logo/gameovertext.png')} style={ styles.gameOver }/></View>
          <View><TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
            <Image source={require('../../assets/buttons/playagain.png')} style={ styles.playAgain }/>
          </TouchableOpacity></View>
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
    // Game over flex
    gameOverFlex:{
        flex: 1, 
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#333132',
        justifyContent: 'space-around',
        alignItems: "center",
    },
    // Game Over Image
    gameOver:{
        width: 300,
        height: 160,
    },
    // Play Again Button
    playAgain:{
        width: 230,
        height: 60,
    },
})

export default GameOver;