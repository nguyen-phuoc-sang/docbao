import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const Bookmark = (props) => {
  const { navigation } = props;


  return (
    <View style={styles.container}>

      <View style={styles.container2}>
        <Image style={styles.setting} source={require('../../media/images/back.png')} />
        <Text style={styles.label}>Sign in</Text>
        <View></View>
      </View>

      <Text style={styles.hello}>Welcom to</Text>
      <Text style={styles.text}>Enter your phone number or email address for sign in. Enjoy your food</Text>

      <Text style={styles.username}>EMAIL ADDRESS</Text>

      <TextInput style={styles.input}>
      </TextInput>

      <Text style={styles.pass}>Password</Text>

      <View style={styles.inputContainer}>

        <TextInput style={styles.inputPass}
          secureTextEntry={true} ></TextInput>
        <Image style={styles.eye} source={require('../../media/images/eye.png')} />
      </View>

      <Text style={styles.forget}>Forget Password?</Text>

      <Pressable style={styles.btn} onPress={() => navigation.navigate('Explore')}>
        <Text style={styles.label5}>Sign in</Text>
      </Pressable>

    </View>

  )
}

export default Bookmark

const styles = StyleSheet.create({
  label5: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#FFFFFF',
    marginLeft: 10
  },
  btn: {
    width: '100%',
    height: 48,
    backgroundColor: 'green',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  forget: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 13,
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
    marginTop: 30,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 30,
    letterSpacing: 0.12,
    color: '#4e4b66'
  },
  text: {
    fontWeight: '320',
    fontSize: 13,
    paddingRight: 34
  },
  hello: {
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 70,
    letterSpacing: 0.12,
    color: '#050505'
  },
  setting: {
    width: 22,
    height: 22
  },
  label: {
    fontWeight: '500',
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
    padding: 50,
  }

});