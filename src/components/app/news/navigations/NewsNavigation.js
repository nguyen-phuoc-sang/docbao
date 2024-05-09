import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Add from '../screens/Add';
import Profile from '../screens/Profile';



const Tab = createBottomTabNavigator();


const NewsNavigation = () => {
    const configTab = (route) => {
        return {
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                    if (focused) {
                        return <Image source={require('../../../../media/images/home.png')} style={{ width: 24, height: 24 }}></Image>
                    } else {
                        return <Image source={require('../../../../media/images/homeden.png')} style={{ width: 24, height: 24 }}></Image>
                    }
                } else if (route.name === 'Detail') {
                    if (focused) {
                        return <Image source={require('../../../../media/images/bookmarkBlue.png')} style={{ width: 24, height: 24 }}></Image>
                    } else {
                        return <Image source={require('../../../../media/images/bookmark.png')} style={{ width: 24, height: 24 }}></Image>
                    }
                } else if (route.name === 'Add') {
                    if (focused) {
                        return <Image source={require('../../../../media/images/exxanh.png')} style={{ width: 24, height: 24 }}></Image>
                    } else {
                        return <Image source={require('../../../../media/images/explore.png')} style={{ width: 24, height: 24 }}></Image>
                    }
                } else if (route.name === 'Profile') {
                    if (focused) {
                        return <Image source={require('../../../../media/images/proxxanh.png')} style={{ width: 24, height: 24 }}></Image>
                    } else {
                        return <Image source={require('../../../../media/images/profile.png')} style={{ width: 24, height: 24 }}></Image>
                    }
                }
            },
        }
    }


    return (
        <Tab.Navigator screenOptions={({ route }) => configTab(route)}>
            <Tab.Screen name='Home' component={Home}></Tab.Screen>
            <Tab.Screen name='Detail' component={Detail}></Tab.Screen>
            <Tab.Screen name='Add' component={Add}></Tab.Screen>
            <Tab.Screen name='Profile' component={Profile}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default NewsNavigation