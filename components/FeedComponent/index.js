import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';

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
        color: "black"
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
    },
    textColor: {
        color: "black"
    }
})


const PhotoComponent = ({ image, navigation }) => {
    const { images, centertext, boxshadow, roundimage, textunderImage, paddingButtom, textColor } = styles;

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



const FeedComponent = ({ navigation, image }) => {
    console.log(image.images);
    const { textColor } = styles;
    useEffect(() => {

    })
    return (
        <ScrollView>
            {image.images ? image.images.map((image, id) => <PhotoComponent key={id} image={image} navigation={navigation} />) : <Text style={textColor}>...Fetch Data</Text>}
        </ScrollView>
    )
}



export default connect(state => ({ image: state.images }))(FeedComponent);