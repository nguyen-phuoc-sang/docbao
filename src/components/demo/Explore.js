import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'

const Explore = () => {

  const renderItem = ({ item }) => {
    const { title, image, } = item;
    return (
      <View style={styles.view1}>

        <View style={styles.view2}>
          <Image style={styles.anh} source={require('../../media/images/keo.jpg')} />
          <Text style={styles.keo}>{title}</Text>
          <Text style={styles.tien}>$$    chinese</Text>
        </View>

        <View style={styles.view2}>
          <Image style={styles.anh} source={require('../../media/images/banh.jpg')} />
          <Text style={styles.keo}>{title}</Text>
          <Text style={styles.tien}>$$    chinese</Text>
        </View>

      </View>
    )
  }
  return (
    <View style={styles.container}>

      <Text style={styles.label}>Search</Text>

      <View style={styles.inputContainer}>
        <View style={styles.coverPhoto}>
          <Image style={styles.eye} source={require('../../media/images/search.png')} />
          <Text style={styles.se}>Search</Text>
        </View>
      </View>

      <Text style={styles.top}>Top Restaurants</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={Math.random}
        showsVerticalScrollIndicator={false} />

    </View>
  )
}

export default Explore

const styles = StyleSheet.create({

  keo: {
    fontSize: 19,
    marginTop: 10,
  },
  anh: {
    width: 150,
    height: 150,
  },
  view2: {
    flexDirection: 'column',
    marginRight: 40
  },
  view1: {
    flexDirection: 'row',
    marginTop: 20,
  },
  top: {
    marginTop: 20,
    fontSize: 20,
  },
  se: {
    position: 'absolute',
    left: 50,
    top: 10,
  },
  eye: {
    width: 15,
    height: 15,
    position: 'absolute',
    left: 13,
    top: 13,
  },
  inputContainer: {
    position: 'relative',
  },
  coverPhoto: {
    width: '100%',
    height: 40,
    backgroundColor: '#eef1f4',
    borderRadius: 6,
    marginTop: 20
  },
  label: {
    fontSize: 30,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  }

});

const data = [
  {
    "_id": "63bfa809c4f47f0016aee205",
    "title": "Kẹo",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
      "_id": "63ac39aeedf7c80016c57a67",
      "name": "",
      "avatar": ""
    }
  },

  {
    "_id": "63bfa809c4f47f0016aee205",
    "title": "Kẹo",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
      "_id": "63ac39aeedf7c80016c57a67",
      "name": "",
      "avatar": ""
    }
  },

  {
    "_id": "63bfa809c4f47f0016aee205",
    "title": "Kẹo",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
      "_id": "63ac39aeedf7c80016c57a67",
      "name": "",
      "avatar": ""
    }
  },

  {
    "_id": "63bfa809c4f47f0016aee205",
    "title": "Kẹo",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
      "_id": "63ac39aeedf7c80016c57a67",
      "name": "",
      "avatar": ""
    }
  },

  {
    "_id": "63bfa809c4f47f0016aee205",
    "title": "Kẹo",
    "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
    "createdAt": "2023-01-12T06:26:17.539Z",
    "createdBy": {
      "_id": "63ac39aeedf7c80016c57a67",
      "name": "",
      "avatar": ""
    }
  },

]
