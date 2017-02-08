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
    ScrollView
} from 'react-native';

var HotShowingDetail = React.createClass({
    getInitialState:function () {
      return{
          summary:""
      }
    },
    render:function () {
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.welcome}>
                    {this.props.data.title}
                </Text>
                <Text style={styles.welcome}>
                    {this.state.summary}
                </Text>
            </ScrollView>
        )
    },
    //利用第一次请求的id,再次去接口请求电影详细信息的相关数据
    componentDidMount:function () {
        //this.props.data为HotShowing版块 passProps:{data}传过来的data,可以直接获取到
        var url_api = "http://api.douban.com/v2/movie/subject/"+this.props.data.id;
        fetch(url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                var summary = responseData.summary;
                this.setState({
                    summary:summary
                })
            })
    },
});


const styles = StyleSheet.create({
    //ScrollView不能使用justifyContent: 'center',alignItems: 'center',
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

module.exports = HotShowingDetail;
