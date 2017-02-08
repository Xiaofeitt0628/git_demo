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
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

var Top250Detail = require("./Top250Detail");

var Top250 = React.createClass({
    getDefaultProps:function () {
        return{
            uri_api: "http://api.douban.com/v2/movie/top250"
        }
    },
    getInitialState:function () {
        return{
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2})//换行规则,此时不是数据就是一个规则
        }
    },
    render:function () {
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        )
    },
    renderRow:function (rowData) {
        return (
            <TouchableOpacity
                activeOpacity={0.5}//设置点击时的透明度
                onPress={()=>{this.pushToDetail(rowData)}}//点击切换到HotShowingDetail版块(详情页)
            >
                <View style={styles.bigViewStyle}>
                    <Image
                        source={{uri:rowData.image}}
                        style={styles.iconStyle}
                    />
                    <View style={styles.rightViewStyle}>
                        <Text>{rowData.title}</Text>
                        <Text>{rowData.year}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    },
    pushToDetail:function (data) {
        this.props.navigator.push({
                component:Top250Detail,
                title:data.title,
                //把data传到跳转的页面
                passProps:{data}
        })
    },
    componentDidMount:function () {
        this.loadData();
    },
    loadData:function () {
        fetch(this.props.uri_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                //请求完成时执行下面代码
                var myArr = [];
                for(var i = 0;i < responseData.subjects.length;i++){
                    var myObj = {};
                    myObj.title = responseData.subjects[i].title;
                    myObj.image = responseData.subjects[i].images.medium;
                    myObj.year = responseData.subjects[i].year;
                    myObj.id = responseData.subjects[i].id;
                    myArr.push(myObj);
                }
                //把数据个状态值dataSource
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(myArr)
                });

            })
    },
});


const styles = StyleSheet.create({
    bigViewStyle:{
        flexDirection:"row",
        padding:10
    },
    iconStyle:{
        width:100,
        height:120,
        marginRight:10
    },
    rightViewStyle:{
        justifyContent:"center"
    }
});

module.exports = Top250;
