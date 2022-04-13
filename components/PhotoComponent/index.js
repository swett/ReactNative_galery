import React from 'react'
import { View, ImageBackground, Text, Dimensions } from "react-native";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width

const FullPhotoView = ({ route }) => {
  console.log(route)
  const { imageId, image } = route.params;

  console.log(imageId, image);
  return (
    <View style={{ flex: 1 }}>
      {image ? <ImageBackground resizeMode='cover' style={{ flex: 1, width: deviceWidth, height: deviceHeight }} source={{ uri: image }} /> : <Text>fetching data</Text>}
    </View>
  )
}


export default FullPhotoView;