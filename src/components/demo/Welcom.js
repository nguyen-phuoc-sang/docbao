import { View, Text, Button } from 'react-native'
import React from 'react'

const Welcom = (props) => {
    const { ten, setName } = props;
    const changeName = () => {
        setName('Sang');
    }
    return (
        <View>
            <Text>Welcom {ten}</Text>

            <Button
                title='Đổi tên'
                onPress={changeName}
            />
        </View>
    )
}

export default Welcom