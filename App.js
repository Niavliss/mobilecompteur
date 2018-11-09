/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


import CounterCountainer from "./src/screens/counter/CounterCountainer";
import LocalisationCountainer  from "./src/screens/Localisation/LocalisationCountainer";
import LoginCountainer from "./src/screens/Login/LoginCountainer";



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
      return (
        <RootStack/>
      );
  }
}

export const RootStack = createStackNavigator(
    {
        Home: {
            screen: CounterCountainer,
        },

        Localisation: {
            screen: LocalisationCountainer,
        },

        Login: {
            screen: LoginCountainer,

        }
    },
    {
        initialRouteName: 'Login',
    }
);