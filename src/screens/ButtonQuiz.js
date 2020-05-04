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


// https://www.npmjs.com/package/react-native-grid-component
import Grid from 'react-native-grid-component';

var allImages = [require('../../assets/slides/monster1.png'),
require('../../assets/slides/monster2.png'),
require('../../assets/slides/monster3.png'),
require('../../assets/slides/monster4.png')];

class ButtonQuiz extends Component{
    _renderItem = (data, i) => (
        <View style={[{ backgroundColor: 'blue' }, styles.item]}>
            <Image source={data} style={ styles.btnQuiz }/>
        </View>
    //   <TouchableOpacity 
    //   //onPress={() => this.props.navigation.navigate('Menu')}
    //   >
    //   <Image source={data} style={ styles.btnQuiz }/>
    //  key={i} /></TouchableOpacity>
    );
  
    render(){
      return(
        <View style={styles.formContainer}>
            <Grid
            style={styles.list}
            renderItem={this._renderItem}
            renderPlaceholder={this._renderPlaceholder}
            data={allImages}
            numColumns={2}
            />
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
    // Button quiz - Grid
    btnQuiz:{
        flex: 1,
        height: 160,
        width: 160,
        margin: 10,
    },
    list:{
        flex: 1
    }
})

export default ButtonQuiz;