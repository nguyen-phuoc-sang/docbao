import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={style.container}>

            <View style={style.container2}>
                <View></View>
                <Text style={style.label}>Profile</Text>
                <Image style={style.setting} source={require('../../../../media/images/setting.png')} />
            </View>

            <View style={style.container3}>
                <Image style={style.avatar} source={require('../../../../media/images/profile.png')} />

                <View style={style.container4}>
                    <Text style={style.labe2}>1000</Text>
                    <Text style={style.labe3}>Followers</Text>
                </View>

                <View style={style.container4}>
                    <Text style={style.labe2}>500</Text>
                    <Text style={style.labe3}>Following</Text>
                </View>

                <View style={style.container4}>
                    <Text style={style.labe2}>23</Text>
                    <Text style={style.labe3}>News</Text>
                </View>
            </View>

            <Text style={style.labe4}>Sang</Text>
            <Text style={style.labe3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

            <View style={style.container5}>

                <Pressable style={style.btn}>
                    <Text style={style.label5}>Edit Profile</Text>
                </Pressable>

                <Pressable style={style.btn}>
                    <Text style={style.label5}>Website</Text>
                </Pressable>

            </View>


        </View>
    )
}

export default Profile

const style = StyleSheet.create({
    label5: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#FFFFFF',
        marginLeft: 10
    },
    btn: {
        width: '46%',
        height: 48,
        backgroundColor: '#1877F2',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container5: {
        flexDirection: 'row',
        paddingTop: 16,
        justifyContent: 'space-between'
    },
    labe4: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
        paddingTop: 16
    },
    labe3: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4E4B66',
        paddingTop: 4
    },
    labe2: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
    container4: {
        paddingLeft: 22,
        paddingTop: 20,
        textAlign: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 70,
    },
    container3: {
        flexDirection: 'row',
        paddingTop: 13
    },
    setting: {
        width: 22,
        height: 22
    },
    label: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    }
});