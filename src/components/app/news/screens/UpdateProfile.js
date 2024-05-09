import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'

const UpdateProfile = () => {
    return (
        <View style={style.container}>

            <View style={style.container2}>
                <Image style={style.cancel} source={require('../../../../media/images/cancel2.png')} />
                <Text style={style.label}>Edit Profile</Text>
                <Image style={style.check} source={require('../../../../media/images/check2.png')} />
            </View>

            <View style={style.container3}>
                <View style={style.container4}>
                    <Image style={style.add_photo} source={require('../../../../media/images/photo.png')} />
                </View>
            </View>

            <Text style={style.label2}>UserName</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.label2}>Full Name</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.label2}>Email Address*</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.label2}>Phone Number*</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.label2}>Bio</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.label2}>Website</Text>
            <TextInput style={style.input}></TextInput>

        </View>
    )
}

export default UpdateProfile

const style = StyleSheet.create({
    input: {
        marginTop: 4,
        width: '100%',
        padding: 10,
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4e4b66' 
    },
    label2: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66',
        paddingTop: 16
    },
    add_photo: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 110,
        left: 100
    },
    container4: {
        width: 140,
        height: 140,
        backgroundColor: '#EEF1F4',
        borderRadius: 70,
    },
    container3: {
        alignItems: 'center',
        paddingTop: 20,
    },
    label: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,

    },
    check: {
        width: 12,
        height: 12,
        paddingTop: 25
    },
    cancel: {
        width: 12,
        height: 12,
        paddingTop: 25
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    }
});