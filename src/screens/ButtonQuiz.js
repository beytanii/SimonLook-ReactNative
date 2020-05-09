import * as React from 'react';
import { Component} from 'react';
import { Button, 
      View, 
      StyleSheet,
      Image, 
      TouchableOpacity,
      ImageBackground,
      Text
} from 'react-native';

// https://www.npmjs.com/package/react-native-grid-component
import Grid from 'react-native-grid-component';

var allImages = [require('../../assets/slides/monster1.png'),
require('../../assets/slides/monster2.png'),
require('../../assets/slides/monster3.png'),
require('../../assets/slides/monster4.png')];

class ButtonQuiz extends Component{
    _renderItem = (data, i) => (
        <TouchableOpacity style={[{ backgroundColor: '#2c3e50' }, styles.item]} onPress={()=> console.log([i])}>
            <Image source={data} style={ styles.btnQuiz } />
        </TouchableOpacity>
    );

    render(){
        setTimeout(() => {this.props.navigation.navigate('GameOver');}, 5000);
        return(
            <View style={styles.formContainer}>
                <View style={styles.midContainer} >
                    <Grid
                    style={styles.list}
                    renderItem={this._renderItem}
                    //renderPlaceholder={this._renderPlaceholder}
                    data={allImages}
                    numColumns={2}
                    />
                </View>
                <View style={styles.score}>
                    <ImageBackground source={require('../../assets/logo/scoreboard.png')} style={styles.scoreboard}>
                    {/* <Text>{JSON.stringify(navigation.getParam('score'))}</Text> */}
                        <Text style={styles.scoreText}>score</Text>
                    </ImageBackground>
                </View>
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
      },
    // Button quiz - Grid
    btnQuiz:{
        flex: 1,
        height: 200,
        width: 200,
    },
    list:{
        flex: 2
    },
    item:{
        // height: 200,
        // width: 200,
        //borderColor:'#ededed',
        //borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    midContainer:{
        height:400
    },
    // score
    score:{
        paddingTop: 30,
    },
    scoreboard:{
        width: 300,
        height: 80,
        justifyContent: 'center',
        alignItems: "center",
    },
    scoreText:{
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },
})

export default ButtonQuiz;