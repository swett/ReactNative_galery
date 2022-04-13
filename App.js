/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet,Text,View,} from 'react-native';
import FeedComponent from './components/FeedComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const {container} = styles
  return (
    <View style={container}>
    <Text>Hello World</Text>
    <FeedComponent navigation={navigation}/>
  </View>
  )
}

const DetailScreen = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Detail</Text>
    </View>
  )
}


const App = () => {
 

  return (
   <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Details' component={DetailScreen}/>
        </Stack.Navigator>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",
    marginTop: 35,
    alignItems: "center"
  }
});

export default App;
