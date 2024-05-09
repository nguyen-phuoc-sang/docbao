import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Hello = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [kq, setKq] = useState('');

    const xo = () => {
        const random = Math.floor(Math.random() * 100)

        setNumber2(random);
        if (random == number1) {
            //Alert.alert('Chúc mừng bạn');
            setKq('Bạn đã trúng thưởng')
        } else {
            //Alert.alert('Trúng gió');
            setKq('Chúc may mắn lần sau')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chương trình xổ số</Text><br></br>

            <TextInput Text style={styles.input}
                placeholder="Nhập số"
                value={number1}
                onChangeText={Text => setNumber1(Text)}

            />

            <Text style={styles.kq}>Số trúng thưởng: {number2} </Text>
            <Text style={styles.kq}>{kq}</Text>

            <Button
                title="Xổ"
                onPress={xo}
            />
            
        </View>
    )
}

export default Hello

const styles = StyleSheet.create({
    kq: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 70,
        letterSpacing: 0.12,
        color: 'red'
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
    title: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 70,
        letterSpacing: 0.12,
        color: '#1877f2'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    }
});