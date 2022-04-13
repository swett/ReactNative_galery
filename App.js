/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import FeedComponent from './components/FeedComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FullPhotoView from './components/PhotoComponent';
import { Provider } from 'react-redux';
import store from './reducer';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const { container } = styles
  return (
    <View style={container}>
      <FeedComponent navigation={navigation} />
    </View>
  )
}

const DetailScreen = ({ route }) => {
  const { container, textColor } = styles;
  return (
    <View style={container}>
      <FullPhotoView route={route} />
    </View>
  )
}


const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Details' component={DetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  textColor: {
    color: "black",
  }
});

export default App;
