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
var my = "网络上修改的数据"
var myNew = "嘿嘿";
var you = "领个屁";
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
