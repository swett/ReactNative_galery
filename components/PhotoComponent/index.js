import React, { useState } from 'react'
import { View, ImageBackground, Text, Dimensions, StyleSheet, TouchableWithoutFeedback } from "react-native";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    backgroundColor: "#000000c0",
    fontSize: 42
  },
  bottomView: {
    width: '100%',
    height: 50,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#000000c0",
  }
})


const FullPhotoView = ({ route }) => {
  console.log(route)
  const { imageId, image } = route.params;
  const { text, bottomView } = styles
  const [show, setShow] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => setShow(!show)}>
        {image ? <ImageBackground resizeMode='cover' style={{ flex: 1, width: deviceWidth, height: deviceHeight }} source={{ uri: image }} >
          {show ? <View style={{ flex: 1 }}>
            <Text style={text}>Hello</Text>
            <View style={bottomView}>
              <Text style={text}>Bottom</Text>
            </View>
          </View> : <></>}
        </ImageBackground> : <Text>fetching data</Text>}
      </TouchableWithoutFeedback>
    </View>
  )
}


export default FullPhotoView;