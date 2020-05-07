import * as React from 'react';
import { Component} from 'react';
import {View, 
      Text, 
      StyleSheet,
} from 'react-native';

// https://www.npmjs.com/package/react-native-timed-slideshow
import TimedSlideshow from 'react-native-timed-slideshow';

var allImages = [
    {id: 1, uri: require('../../assets/slides/monster1.png')},
    {id: 2, uri: require('../../assets/slides/monster2.png')},
    {id: 3, uri: require('../../assets/slides/monster3.png')},
    {id: 4, uri: require('../../assets/slides/monster4.png')}
];

// var allImages = [
//     {uri: require('../../assets/slides/monster1.png')},
//     {uri: require('../../assets/slides/monster2.png')},
//     {uri: require('../../assets/slides/monster3.png')},
//     {uri: require('../../assets/slides/monster4.png')}
// ];

var images = []

//var sample = allImages.map((imgID) => <Text>{imgID}</Text> )

var variation = [];
var sample = allImages[0];

class DisplaySlide extends Component{
    // componentDidUpdate(){
    //     this.props.navigation.navigate('Menu')
    // }

    addImgToArr(){
         images.push(allImages[Math.floor(Math.random()*allImages.length)]);
         console.log(images);
         console.log(images[0]);
         console.log(sample); 
    }



    render(){
        this.addImgToArr()
        return(
            <View style={styles.formContainer}>
                <View style={styles.slide}>
                    <TimedSlideshow
                        items={images}
                        //index={0}
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
                <Text style={{color:"#fff", fontSize:20}}>{}</Text>
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
        width: 400,
        height: 400,
    },
    // score
    scoreboard:{
        width: 300,
        height: 80,
    },
    hide:{
        opacity:0
    }
})

export default DisplaySlide;

//https://www.freecodecamp.org/forum/t/react-accessing-specific-index-of-array-in-state-with-a-variable/272386
//https://www.robinwieruch.de/react-state-array-add-update-remove
// https://reactnativecode.com/react-native-create-show-array-elements-text-using-map/
// https://www.w3schools.com/jsref/jsref_keys.asp
//https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/