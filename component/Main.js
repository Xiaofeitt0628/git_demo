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
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

var HotShowing = require("./HotShowing");
var CommingSoon = require("./CommingSoon");
var Top250 = require("./Top250");

var Main = React.createClass({
    getInitialState:function () {
      return{
          selectedTabBarItem:"正在热映"
      }
    },
    render:function () {
       return(
            <TabBarIOS
              tintColor="orange"
            >
                 {/*第一页*/}
                <TabBarIOS.Item
                    icon={require("./../images/tabbar_home@2x.png")}
                    title="正在热映"
                    selected={this.state.selectedTabBarItem == "正在热映"}
                    onPress={()=>{this.setState({
                        selectedTabBarItem:"正在热映"
                    })}}
                >
                    <NavigatorIOS
                        tintColor="black"
                        style={{flex:1}}
                        initialRoute={{
                            component:HotShowing,
                            title:"正在热映",
                            leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                            rightButtonIcon:require("./../images/navigationbar_pop@2x.png")
                        }}
                    />

                </TabBarIOS.Item>
                {/*第二页*/}
                <TabBarIOS.Item
                    icon={require("./../images/tabbar_message_center@2x.png")}
                    title="即将上映"
                    selected={this.state.selectedTabBarItem == "即将上映"}
                    onPress={()=>{this.setState({
                        selectedTabBarItem:"即将上映"
                    })}}
                >
                    <NavigatorIOS
                        tintColor="black"
                        style={{flex:1}}
                        initialRoute={{
                            component:CommingSoon,
                            title:"即将上映",
                            leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                            rightButtonIcon:require("./../images/navigationbar_pop@2x.png")
                        }}
                    />

                </TabBarIOS.Item>
                {/*第三页*/}
                <TabBarIOS.Item
                    icon={require("./../images/tabbar_discover@2x.png")}
                    title="Top250"
                    selected={this.state.selectedTabBarItem == "Top250"}
                    onPress={()=>{this.setState({
                        selectedTabBarItem:"Top250"
                    })}}
                >
                    <NavigatorIOS
                        tintColor="black"
                        style={{flex:1}}
                        initialRoute={{
                            component:Top250,
                            title:"Top250",
                            leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                            rightButtonIcon:require("./../images/navigationbar_pop@2x.png")
                        }}
                    />

                </TabBarIOS.Item>
            </TabBarIOS>
       );
    },
});



const styles = StyleSheet.create({

});

module.exports = Main;
