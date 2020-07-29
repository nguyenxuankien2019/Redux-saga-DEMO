import React, { useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SigninScreen from '../screens/SigninScreen';
import AccountScreen from '../screens/AccountScreen';
import SignupScreen from '../screens/SignupScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import { Provider as AuthProvider } from '../context/AuthContext'
import { setNavigator } from './navigatorRef';
import { Context as AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();
let isLogin = true;

const TrackListFlowStack = createStackNavigator();
function TrackListFlowScreen() {
  return (
    <TrackListFlowStack.Navigator initialRouteName="TrackList">
      <TrackListFlowStack.Screen name="TrackList" component={TrackListScreen} />
      <TrackListFlowStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackListFlowStack.Navigator>
  )
}

const LoginStack = createStackNavigator();
function LoginFlowStack() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator>
        <LoginStack.Screen name="Signin" component={SigninScreen} />
        <LoginStack.Screen name="Signup" options={{ title: '' }} component={SignupScreen} />
      </LoginStack.Navigator>
    </NavigationContainer>
  )
}

const MainFlow = createBottomTabNavigator();
const AppStackNavigator = () => {
  const { state, signup } = useContext(AuthContext);
  console.log('signup state: ',state);

  if (!state.token) {
    return <LoginFlowStack />
  }
  return (
    <NavigationContainer  >
      <MainFlow.Navigator>
        <MainFlow.Screen name="TrackListFlow" component={TrackListFlowScreen} />
        <MainFlow.Screen name="TrackCreate" component={TrackCreateScreen} />
        <MainFlow.Screen name="Account" component={AccountScreen} />
      </MainFlow.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <AppStackNavigator />
    </AuthProvider>
  )
}