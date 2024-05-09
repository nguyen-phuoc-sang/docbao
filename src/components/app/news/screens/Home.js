import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../utilities/NewsContext'

const Home = (props) => {

    const { navigation } = props
    const { getNews } = useContext(NewsContext);
    const [data, setData] = useState([]);

    const [refreshing, setRefreshing] = useState(false);
    const refreshData = async () => {
        setRefreshing(true);
        const result = await getNews();
        setData(result);
        setRefreshing(false);
    }

    useEffect(() => {
        // chạy lần đầu tiên và mỗi khi có sự thay đổi state
        // tự động chạy sau khi component được render
        const get = async () => {
            const response = await getNews();
            setData(response);
        }
        get();
        return () => { }
    }, []);

    // adapter
    const renderItem = ({ item }) => {
        const { title, image, _id, name, price, quantity } = item;


        return (
            <View>
                <Pressable style={style.container8} onPress={() => navigation.navigate('Detail', { id: _id })}>
                    <Image style={style.image} source={{ uri: image }} />
                    <View style={style.container9}>
                        <Text style={style.label8}>{name}</Text>
                        <Text style={style.label9}>{price}</Text>
                        <Text style={style.label8}>{quantity}</Text>
                    </View>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={style.container}>

            <View style={style.container4}>
                <View style={style.container5}>
                    <Text style={style.label2}>Ka</Text>
                    <Image style={style.new} source={require('../../../../media/images/new.png')} />
                    <Text style={style.label2}>ar</Text>
                </View>
                <View style={style.containerBell}>
                    <Image style={style.bell} source={require('../../../../media/images/bell.png')} />
                </View>
            </View>

            <View style={style.container6}>
                <Text style={style.label3}>Latest</Text>
                <Text style={style.label4}>See all</Text>
            </View>

            <View style={style.container7}>
                <Text style={style.label5}>All</Text>
                <Text style={style.label6}>Sport</Text>
                <Text style={style.label6}>Politics</Text>
                <Text style={style.label6}>Bussiness</Text>
                <Text style={style.label6}>Health</Text>
                <Text style={style.label6}>Travel</Text>
                <Text style={style.label6}>Science</Text>
            </View>

            <Text style={style.label7}>___</Text>


            <View style={style.body}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={Math.random}
                    showsVerticalScrollIndicator={false}
                    refreshing={refreshing}
                    onRefresh={refreshData} />
            </View>

        </View>
    )
}

export default Home

const style = StyleSheet.create({
    body: {
        height: 530
    },
    label10: {
        fontSize: 13,
        lineHeight: 19.5,
        letterSpacing: 0.12,
        fontWeight: '650'
    },
    label9: {
        width: 250,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        fontWeight: '400'
    },
    label8: {
        fontSize: 13,
        lineHeight: 19.5,
        letterSpacing: 0.12,
        fontWeight: '500'
    },
    logo: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    clock: {
        width: 12,
        height: 12,
        marginLeft: 10,
        marginTop: 5,
        marginRight: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginRight: 4
    },
    container11: {
        flexDirection: 'row',
    },
    container10: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 230,
        marginTop: 8
    },
    container9: {
        flexDirection: 'column',
    },
    container8: {
        flexDirection: 'row',
        marginTop: 20,
    },
    label7: {
        color: '#1877F2'
    },
    label6: {
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        marginRight: 12
    },
    label5: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        marginRight: 12
    },
    container7: {
        width: 428,
        flexDirection: 'row',
        marginTop: 16
    },
    label4: {
        fontWeight: '200',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        marginTop: 2
    },
    label3: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    container6: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    bell: {
        width: 30,
        height: 30,
        marginLeft: 1,
        marginTop: 2
    },
    containerBell: {
        width: 32,
        height: 32,
        marginTop: 4,
        shadowRadius: 0.9,
        borderRadius: 1
    },
    new: {
        width: 33,
        height: 33,
        marginTop: 4,
    },
    label2: {
        fontWeight: '700',
        fontSize: 33,
        color: '#1877F2'
    },
    container5: {
        flexDirection: 'row',
    },
    container4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    label: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    Icon2: {
        width: 19,
        height: 19,
        marginLeft: 19
    },
    Icon: {
        width: 19,
        height: 19,
        marginLeft: 11
    },
    container3: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    container2: {
        width: 389,
        height: 78,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        shadowRadius: 1,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    }
});

//dữ liệu ảo
// const data = [
//     {
//         "_id": "63bfa809c4f47f0016aee205",
//         "title": "Ukraine's President Zelensky to BBC: Blood money being paid...",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },

//     {
//         "_id": "63bfa809c4f47f0016aee206",
//         "title": "Her train broke down. Her phone died. And then she met her..",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },

//     {
//         "_id": "63bfa809c4f47f0016aee207",
//         "title": "We keep rising to new challenges:' For churches hit by",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },

//     {
//         "_id": "63bfa809c4f47f0016aee207",
//         "title": "We keep rising to new challenges:' For churches hit by",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },

//     {
//         "_id": "63bfa809c4f47f0016aee207",
//         "title": "We keep rising to new challenges:' For churches hit by",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },

//     {
//         "_id": "63bfa809c4f47f0016aee207",
//         "title": "We keep rising to new challenges:' For churches hit by",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },

//     {
//         "_id": "63bfa809c4f47f0016aee207",
//         "title": "We keep rising to new challenges:' For churches hit by",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },

//     {
//         "_id": "63bfa809c4f47f0016aee207",
//         "title": "We keep rising to new challenges:' For churches hit by",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },

//     {
//         "_id": "63bfa809c4f47f0016aee207",
//         "title": "We keep rising to new challenges:' For churches hit by",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },

//     {
//         "_id": "63bfa809c4f47f0016aee207",
//         "title": "We keep rising to new challenges:' For churches hit by",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     }
// ]