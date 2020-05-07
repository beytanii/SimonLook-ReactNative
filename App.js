import * as React from 'react';
import { Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SimonLogo from './src/screens/SimonLogo';
import Menu from './src/screens/Menu';
import Settings from './src/screens/Settings';
import DisplaySlide from './src/screens/DisplaySlide';
import ButtonQuiz from './src/screens/ButtonQuiz';
import GameOver from './src/screens/GameOver';

const Stack = createStackNavigator();

class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu" headerMode="none">
        <Stack.Screen name="SimonLogo"  component={SimonLogo} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="DisplaySlide" component={DisplaySlide} />
        <Stack.Screen name="ButtonQuiz" component={ButtonQuiz} />
        <Stack.Screen name="GameOver" component={GameOver} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;