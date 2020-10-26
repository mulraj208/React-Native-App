import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./components/Home";
import AppBar from "./components/AppBar";
import Post from "./components/Post";

const Stack = createStackNavigator();

export default function App({data}) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <AppBar {...props} />,
          }}>
          <Stack.Screen name="Home">
            {props => <Home {...props} data={data} />}
          </Stack.Screen>
          <Stack.Screen name="Post" component={Post}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
