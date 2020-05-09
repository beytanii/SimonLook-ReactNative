import * as React from 'react';
import { Component} from 'react';
import {View, 
      Text, 
      StyleSheet,
      Image, 
      TouchableOpacity,
      FlatList,
      ImageBackground
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// https://www.npmjs.com/package/react-native-timed-slideshow
import TimedSlideshow from 'react-native-timed-slideshow';

// https://www.npmjs.com/package/react-native-grid-component
import Grid from 'react-native-grid-component';

import GameOver from './GameOver';

// importing images
var allImages = [
    {uri: require('../../assets/slides/monster1.png')},
    {uri: require('../../assets/slides/monster2.png')},
    {uri: require('../../assets/slides/monster3.png')},
    {uri: require('../../assets/slides/monster4.png')}
];

var BtnImages = [require('../../assets/slides/monster1.png'),
require('../../assets/slides/monster2.png'),
require('../../assets/slides/monster3.png'),
require('../../assets/slides/monster4.png')];

// random image generated
var images = []

// quiz array
var userAns = [];

var display;

class DisplaySlide extends Component{
    render(){
        const {navigation} = this.props;

        setTimeout(() => {navigation.navigate('ButtonQuiz');}, allImages.length*1000);
        return(
            <View style={styles.formContainer}>
                <View style={styles.slide}>
                    <TimedSlideshow
                        items={allImages}
                        loop={false}
                        duration={1000}
                        extraSpacing={true}
                        showProgressBar={false}
                        slideDirection={"left"}
                        footerStyle={styles.hide}
                        renderCloseIcon={() => {
                            imageStyle:{styles.hide};
                        }}                       
                    />
                </View>
                <View style={styles.footer}>
                    <ImageBackground source={require('../../assets/logo/scoreboard.png')} style={styles.scoreboard}>
                    {/* <Text>{JSON.stringify(navigation.getParam('score'))}</Text> */}
                        <Text style={styles.scoreText}>Heey</Text>
                    </ImageBackground>
                </View>    
            </View>
        );
    }
}

class ButtonQuiz extends Component{
    _renderItem = (data, i) => (
        <TouchableOpacity style={[{ backgroundColor: '#2c3e50' }, styles.item]} onPress={()=> console.log([i])}>
            <Image source={data} style={ styles.btnQuiz } />
        </TouchableOpacity>
    );

    render(){
        const {navigation} = this.props;

      return(
        <View>
            <View style={styles.formContainerQuiz}>
                <Grid
                style={styles.list}
                renderItem={this._renderItem}
                //renderPlaceholder={this._renderPlaceholder}
                data={allImages}
                numColumns={2}
                />
            </View>
            <View style={styles.footer}>
                <ImageBackground source={require('../../assets/logo/scoreboard.png')} style={styles.scoreboard}>
                    {/* <Text>{JSON.stringify(navigation.getParam('score'))}</Text> */}
                    <Text style={styles.scoreText}>Heey</Text>
                </ImageBackground>
            </View>
        </View>
      );
    }
}

const Stack = createStackNavigator();



const styles = StyleSheet.create({
    // screen contaainer
    formContainer:{
      flex: 1, 
      backgroundColor: "#2c3e50",
      justifyContent: 'center',
      alignItems: "center",
      
    },
    // Image Slide
    slide:{
        width: 400,
        height: 400,
    },
    hide:{
        opacity:0
    },
    // Button quiz - Grid
    formContainerQuiz:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: "center",
        paddingTop: 100,
        width: 400,
        height: 400,
    },
    btnQuiz:{
        flex: 1,
        height: 200,
        width: 200,
    },
    list:{
        flex: 1
    },
    item:{
        justifyContent: 'center',
        alignItems: "center",
    },
    // score
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
    footer:{
        bottom:0,
    }
})

export default GameOperation;

//https://www.freecodecamp.org/forum/t/react-accessing-specific-index-of-array-in-state-with-a-variable/272386
//https://www.robinwieruch.de/react-state-array-add-update-remove
// https://reactnativecode.com/react-native-create-show-array-elements-text-using-map/
// https://www.w3schools.com/jsref/jsref_keys.asp
//https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
//https://aboutreact.com/example-to-hide-show-component-in-react-native/
//https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/