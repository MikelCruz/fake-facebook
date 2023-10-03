import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

import Header from './components/Header';

import Home from './screens/Home'
import Friends from './screens/Friends'
import Groups from './screens/Groups'
import Profile from './screens/Profile'
import Notifications from './screens/Notifications'
import Menu from './screens/Menu'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {MaterialCommunityIcons} from '@expo/vector-icons'

const App = () => {
  return (
    <>
    <StatusBar
      backgroundColor="#FFFFFF"
      barStyle="dark-content"
    />
    <ScrollView>
      <Header />
    </ScrollView>
    </>
  );
}

export default App
