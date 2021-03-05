import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import customSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen'
import MyBarters from '../screens/MyBarters'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
  },
  Setting: {
    screen: SettingScreen
  },
  MyBarters:{screen:MyBarters},
  },
  {
    contentComponent:customSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })