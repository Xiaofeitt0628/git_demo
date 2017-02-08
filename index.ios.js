/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var myNew = "嘿嘿";
var Main = require("./component/Main");

export default class DouBanWork extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('DouBanWork', () => DouBanWork);
