import { View, Text, StyleSheet, TextInput, Pressable, Image, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../utilities/UserContext';

const SignUp = (props) => {

    const { navigation } = props;

    const { signup } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        if (!email || !password ) {
            Alert.alert('Please enter your email and password');
            return;
        }
        if (password !== confirmpassword) {
            Alert.alert('Password and confirm password  must be the same');
            return;
        }
        const result = await signup(email, password);
        if(result){
            navigation.navigate('Login')
        }else{
            Alert.alert("Unsuccessful")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.hello}>Heloo!</Text>

            <Text style={styles.welcom}>Signup to get Started</Text>

            <Text style={styles.username}>Email*</Text>

            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}

            ></TextInput>

            <Text style={styles.pass}>Password*</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputPass}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                ></TextInput>
                <Image style={styles.eye} source={require('../../../../media/images/eye.png')} />
            </View>

            <Text style={styles.pass}>Confirm Password*</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputPass}
                    secureTextEntry={true}
                    value={confirmpassword}
                    onChangeText={setConfirmPassword}
                ></TextInput>
                <Image style={styles.eye} source={require('../../../../media/images/eye.png')} />
            </View>

            <View style={styles.container2}>
                <Image style={styles.check} source={require('../../../../media/images/check.png')} />
                <Text style={styles.remember}>Remember me</Text>
            </View>

            <Pressable style={styles.btnContainer}>
                <Text style={styles.btnlabel} onPress={handleSignUp}>SignUp</Text>
            </Pressable>

            <Text style={styles.continue}>or continue with</Text>

            <View style={styles.btnSocial}>

                <Pressable style={styles.btnGGFB}>
                    <Image style={styles.Icon} source={require('../../../../media/images/facebook.png')} />
                    <Text style={styles.fbgglabel}>Facebook</Text>
                </Pressable>

                <Pressable style={styles.btnGGFB}>
                    <Image style={styles.Icon} source={require('../../../../media/images/google.png')} />
                    <Text style={styles.fbgglabel}>Google</Text>
                </Pressable>

            </View>

            <View style={styles.finalContainer}>

                <Text style={styles.already}>Already have an account ?</Text>

                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.login}>Login</Text>
                </Pressable>

            </View>

        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    remember: {
        fontsize: 14,
        fontweight: '400',
        lineheight: 21,
        letterspacing: 0.12,
        color: '#4e4b66'
    },
    check: {
        width: 20,
        height: 20,
        borderRadius: 3,
    },
    container2: {
        flexDirection: 'row',
        marginTop: 10,
    },
    login: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#1877f2',
        marginLeft: 5
    },
    already: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66'
    },
    finalContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    continue: {
        marginTop: 16,
        marginBottom: 16,
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66',
        textAlign: 'center'
    },
    Icon: {
        width: 21,
        height: 21,
    },
    fbgglabel: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#667080',
        marginLeft: 10
    },
    btnSocial: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnGGFB: {
        width: '46%',
        height: 48,
        backgroundColor: '#eef1f4',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    eye: {
        width: 22,
        height: 22,
        position: 'absolute',
        right: 10,
        top: 17,
    },
    inputContainer: {
        position: 'relative',
    },
    btnlabel: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#fff',
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17.5,
        paddingVertical: 13,
        paddingHorizontal: 24,
        height: 50,
        width: '100%',
        backgroundColor: '#1877f2',
        borderRadius: 6,
    },
    inputPass: {
        marginTop: 4,
        width: '100%',
        padding: 10,
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4e4b66'
    },
    pass: {
        marginTop: 16,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 30,
        letterSpacing: 0.12,
        color: '#4e4b66'
    },
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
    username: {
        marginTop: 40,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 30,
        letterSpacing: 0.12,
        color: '#4e4b66'
    },
    hello: {
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 70,
        letterSpacing: 0.12,
        color: '#1877f2'
    },
    welcom: {
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: 0.12,
        color: '4e4b66'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    }
});