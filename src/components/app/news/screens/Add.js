import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert } from 'react-native'
import React, { useCallback, useState, useContext } from 'react'
import { NewsContext } from '../utilities/NewsContext'
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker'



const Add = (props) => {

  const { navigation } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  let path = null;


  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  // Khởi tạo camera và kiểm tra quyền truy cập camera
  const initializeCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(status === 'granted');
  };

  // Khởi tạo quyền truy cập thư viện ảnh
  const initializeGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setGalleryPermission(status === 'granted');
  };

  // chụp hình ===========
  const { upload, saveNews } = useContext(NewsContext);

  const takePicture = async () => {
    const photo = await ImagePicker.launchCameraAsync();
    const uriParts = photo.assets[0].uri.split('/');
    const fileName = uriParts[uriParts.length - 1];

    const formData = new FormData();
    formData.append('image', {
      uri: photo.assets[0].uri,
      type: 'image/jpeg',
      name: fileName
    });
    console.log("NAME Photo: ", fileName);
    const res = await upload(formData); // upload ảnh lên server bằng hàm uploadImage
    console.log("RES : ", res);
    setImage(res.path); // lưu đường dẫn của ảnh vào biến imageUri
  };

  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      const uriParts = result.assets[0].uri.split('/');
      const fileName = uriParts[uriParts.length - 1];
      const formData = new FormData();
      formData.append('image', {
        uri: result.assets[0].uri,
        type: 'image/jpeg',
        name: fileName
      });
      console.log("URI : ", result.assets[0].uri);
      console.log("Name : ", result.name);
      const res = await upload(formData); // upload ảnh lên server bằng hàm uploadImage
      console.log("RES : ", res);
      path = res.path;
      setImage(path); // lưu đường dẫn của ảnh vào biến imageUri
    }
  };



  // 
  const showImagePickerOptions = () => {
    Alert.alert(
      'Chọn phương thức',
      '',
      [
        {
          text: 'Chụp ảnh',
          onPress: () => takePicture(),
        },
        {
          text: 'Chọn từ thư viện',
          onPress: () => chooseImage(),
        },
      ],
      { cancelable: true }
    );
  };

  // lưu bài viết
  const handleSubmit = useCallback(async () => {
    const res = await saveNews(title, content, image);
    if (res) {
      setTitle('');
      setContent('');
      setImage(null);
    }
  }, [title, content, image]);

  return (
    <View style={style.container}>
      {
        image ?
          <Image source={{ uri: image }} style={style.coverPhoto}></Image>
          :
          <Pressable onPress={showImagePickerOptions} style={style.coverPhoto}>
            <Image style={style.plus} source={require('../../../../media/images/plus.png')}></Image>
            <Text>Add Cover Photo</Text>
          </Pressable>
      }

      <TextInput style={style.title} placeholder="Title"
        value={title}
        onChangeText={setTitle}>
      </TextInput>

      <TextInput style={style.title} placeholder="Content" numberOfLines={4} multiline={true}
        value={content}
        onChangeText={setContent}>
      </TextInput>

      <Pressable style={style.btnContainer} onPress={handleSubmit}>
        <Text style={style.btnlabel}>Save</Text>
      </Pressable>

    </View>
  )
}

export default Add

const style = StyleSheet.create({
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
  title: {
    width: '100%',
    height: 36,
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1,
    marginTop: 16,
  },
  plus: {
    width: 24,
    height: 24,
    marginBottom: 20,
  },
  coverPhoto: {
    width: '100%',
    height: 183,
    backgroundColor: '#eef1f4',
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  }
})