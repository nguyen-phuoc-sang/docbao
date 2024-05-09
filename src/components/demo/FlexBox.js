import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}></View>
            <View style={styles.view2}></View>
            <View style={styles.view3}></View>
        </View>
    )
}

export default FlexBox

const styles = StyleSheet.create({
    view1: {
        width: 50,
        height: 50,
        backgroundColor: 'black'
    },
    view2: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    view3: {
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',  // căn giữa theo chiều Direction
        //alignItems: 'center',    ngược lại với Direction
        //flexWrap: 'wrap',  tự động xuống dòng khi bị dư
    }
})