import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { NewsContext } from '../utilities/NewsContext';

const Detail = (props) => {

    const { id } = props?.route?.params;
    const { getDetail } = useContext(NewsContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDetail(id);
            setData(result);
        };
        if (id) {
            fetchData();
        }
        return () => { }
    }, [id]);

    return (
        (id && data && data._id.toString() == id.toString()) ?
        
        <View style={style.container}>

            <View style={style.container2}>
                <Image style={style.back} source={require('../../../../media/images/back.png')} />
                <View style={style.container3}>
                    <Image style={style.share} source={require('../../../../media/images/share.png')} />
                    <Image style={style.menu} source={require('../../../../media/images/menu.png')} />
                </View>
            </View>

            <View style={style.container4}>
                <View style={style.container5}>
                    <Image style={style.bbc} source={require('../../../../media/images/bbc.jpg')} />

                    <View style={style.container6}>
                        <Text style={style.name}>BBC News</Text>
                        <Text style={style.time}>10m ago</Text>
                    </View>
                </View>

                <Pressable style={style.btnContainer}>
                    <Text style={style.btnlabel}>Following</Text>
                </Pressable>
            </View>

            <View style={style.body}>
                <ScrollView >
                    <Image style={style.ship} source={{uri: data.image}} />

                    <Text style={style.label}>Europe</Text>

                    <Text style={style.label2}>{data.title}</Text>

                    <Text style={style.label3}>{data.content}</Text>
                </ScrollView>
            </View>

        </View>
        : <></>
    )
}

export default Detail

const style = StyleSheet.create({
    body: {
        height: 600
    },
    book: {
        width: 25,
        height: 25,
        top: 25,
        right: 20
    },
    label4: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    Icon: {
        width: 25,
        height: 25,
        marginRight: 8
    },
    container10: {
        flexDirection: 'row',
        top: 30,
        left: 60
    },
    container9: {
        flexDirection: 'row',
        top: 30,
        left: 30
    },
    container8: {
        flexDirection: 'row',
    },
    container7: {
        width: 389,
        height: 78,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowRadius: 1,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    label3: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    label2: {
        fontSize: 24,
        lineHeight: 36,
        letterSpacing: 0.12,
        fontWeight: '500'
    },
    label: {
        fontWeight: '200',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        marginTop: 6
    },
    ship: {
        width: '100%',
        height: 230,
        marginTop: 20
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
        height: 34,
        width: 102,
        backgroundColor: '#1877f2',
        borderRadius: 6,
        marginTop: 70
    },
    time: {
        fontWeight: '200',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12
    },
    name: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12
    },
    bbc: {
        width: 50,
        height: 50,
    },
    container6: {
        flexDirection: 'column',
        marginTop: 3,
        marginLeft: 3
    },
    container5: {
        flexDirection: 'row',
        marginTop: 62
    },
    container4: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menu: {
        height: 15.555999755859375,
        width: 16,
        marginLeft: 11
    },
    share: {
        height: 15.555999755859375,
        width: 16,
    },
    back: {
        height: 15.555999755859375,
        width: 16,
    },
    container3: {
        flexDirection: 'row',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 40,
        left: 4,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    }
});