import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SigninScreen from '../screens/SigninScreen';
import AccountScreen from '../screens/AccountScreen';
import SignupScreen from '../screens/SignupScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
const Stack = createStackNavigator();

    const AppStackNavigator = () => {
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="SigninScreen">
              <Stack.Screen name="SigninScreen" component={SigninScreen} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
              <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
              <Stack.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
              <Stack.Screen name="AccountScreen" component={AccountScreen} />
              <Stack.Screen name="TrackListScreen" component={TrackListScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        );
      }
      
export default AppStackNavigator