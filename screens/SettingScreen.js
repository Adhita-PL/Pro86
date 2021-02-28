import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader.js'

export default class HomeScreen extends React.Component{
  render(){
    return(
        <View style={{flex:1}}>
         <MyHeader title="SETTING"/>
            <KeyboardAvoidingView behavior="padding">

            </KeyboardAvoidingView>
        </View>
    )}}