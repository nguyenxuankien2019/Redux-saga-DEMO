import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SigninScreen from '../screens/SigninScreen';
import AccountScreen from '../screens/AccountScreen';
import SignupScreen from '../screens/SignupScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
const Stack = createStackNavigator();
    let isLogin = false;

    const TrackListFlow = createStackNavigator();
    function TrackListFlowScreen() {
      return  (
        <TrackListFlow.Navigator initialRouteName='TrackDetail'>
      <TrackListFlow.Screen name="TrackList" component={TrackListScreen}  />
      <TrackListFlow.Screen name="TrackDetail" component={TrackDetailScreen} />
      </TrackListFlow.Navigator>
      )
    }

    const LoginStack = createStackNavigator();
    function LoginFlowStack() {
      return  (
        <NavigationContainer>
        <LoginStack.Navigator>
      <LoginStack.Screen name="Signin" component={SigninScreen}  />
      <LoginStack.Screen name="Signup" component={SignupScreen} />
      </LoginStack.Navigator>
      </NavigationContainer>
      )
    }

    const MainFlow = createBottomTabNavigator();
const AppStackNavigator = () => {
  if(isLogin){
    return <LoginFlowStack/>
  }
  return (
    <NavigationContainer>
        <MainFlow.Navigator>
          <MainFlow.Screen name="TrackListFlow" component={TrackListFlowScreen}  />
      <MainFlow.Screen name="TrackCreate" component={TrackCreateScreen}  />
      <MainFlow.Screen name="Account" component={AccountScreen}  />
        </MainFlow.Navigator>
    </NavigationContainer>
  );
}

export default AppStackNavigator