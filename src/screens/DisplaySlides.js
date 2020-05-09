import * as React from 'react';
import { Component} from 'react';
import {View, 
    StyleSheet,
    Image,
    Text,
    ImageBackground,
} from 'react-native';


// https://www.npmjs.com/package/react-native-timed-slideshow
import TimedSlideshow from 'react-native-timed-slideshow';

// importing images
var allImages = [
    {uri: require('../../assets/slides/monster1.png')},
    {uri: require('../../assets/slides/monster2.png')},
    {uri: require('../../assets/slides/monster3.png')},
    {uri: require('../../assets/slides/monster4.png')}
];


class DisplaySlide extends Component{
    // constructor() {
    //     super();
    //     this.state = {
    //       score: 0,
    //       slides: null
    //     };
    // }
    // componentWillMount(){
    //     this.setState(score: navigation.getParam)
    // }
    render(){
        const {navigation} = this.props;

        setTimeout(() => {this.props.navigation.navigate('ButtonQuiz');}, allImages.length*1000);
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
                <View style={styles.score}>
                    <ImageBackground source={require('../../assets/logo/scoreboard.png')} style={styles.scoreboard}>
                    {/* <Text>{JSON.stringify(navigation.getParam('score'))}</Text> */}
                        <Text style={styles.scoreText}>score</Text>
                    </ImageBackground>
                </View>    
            </View>
        );}
}


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
    hide:{
        opacity:0
    },
})

export default DisplaySlide;