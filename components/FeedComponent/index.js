import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'

let URL = "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"

const styles = StyleSheet.create({
    images: {
        width: 350,
        height: 400,
        borderRadius: 25,
    },
    centertext: {
        textAlign: "center",
        alignSelf: "center",
        paddingLeft: 10,
    },
    boxshadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 20,
        elevation: 14,
        borderRadius: 50,
    },
    roundimage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        alignSelf: 'center',
    },
    textunderImage: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 10,
    },
    paddingButtom: {
        paddingBottom: 20,
    }
})


const PhotoComponent = ({ image, navigation }) => {
    const { images, centertext, boxshadow, roundimage, textunderImage, paddingButtom } = styles;

    return (
        <SafeAreaView>
            <TouchableOpacity style={paddingButtom} onPress={() => navigation.navigate('Details', { imageId: image.id, image: image.urls.regular })}>

                <View style={boxshadow}>
                    <Image style={images} source={{ uri: `${image.urls.regular}`, }} />
                </View>
                <View style={textunderImage}>
                    <Image style={roundimage} resizeMode="cover" source={{ uri: `${image.user.profile_image.medium}`, }} />
                    <Text style={centertext}>

                        {image.user.username}
                    </Text>

                </View>
            </TouchableOpacity>

        </SafeAreaView >
    )
}



const FeedComponent = ({ navigation }) => {
    const [image, setImages] = useState("");

    useEffect(() => {
        axios.get(URL)
            .then(response => {
                setImages(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })
    return (
        <ScrollView>
            {image ? image.map((image, id) => <PhotoComponent key={id} image={image} navigation={navigation} />) : <Text>...Fetch Data</Text>}
        </ScrollView>
    )
}



export default FeedComponent;