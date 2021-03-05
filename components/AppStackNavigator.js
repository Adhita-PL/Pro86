import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import RecieverDetailsScreen from '../screens/ReceiverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
    HomeScreenList :  {
        screen : HomeScreen,
        navigationOptions : {
            headerShown : false
        }
    },
    RecieverDetails : {
        screen : RecieverDetailsScreen,
        navigationOptions : {
            headerShown : false
        }
    },

})