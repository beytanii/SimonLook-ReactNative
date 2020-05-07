import * as React from 'react';
import { Component} from 'react';
import { Button, 
      View, 
      StyleSheet,
      Image, 
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
        <TouchableOpacity style={[{ backgroundColor: '#2c3e50' }, styles.item]}>
            <Image source={data} style={ styles.btnQuiz }/>
        </TouchableOpacity>
    );

    render(){
      return(
        <View style={styles.formContainer}>
            <Grid
            style={styles.list}
            renderItem={this._renderItem}
            //renderPlaceholder={this._renderPlaceholder}
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
      backgroundColor: "#2c3e50",
      justifyContent: 'center',
      alignItems: "center",
      paddingTop: 100,
    },
    // Button quiz - Grid
    btnQuiz:{
        flex: 1,
        height: 200,
        width: 200,
    },
    list:{
        flex: 1
    },
    item:{
        // height: 200,
        // width: 200,
        //borderColor:'#ededed',
        //borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
    }
})

export default ButtonQuiz;