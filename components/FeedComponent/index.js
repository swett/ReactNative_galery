import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux';

let URL = "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"

const { width } = Dimensions.get("window");
const height = width * 100 / 60;

const styles = StyleSheet.create({
    images: {
        width: width - 31,
        height: 500,
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
        marginLeft: 10
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
    paddingLeftAndRightForAll: {
        paddingLeft: 9.3,
        paddingRight: 12,
    },
    paddingLeftAndRightForFirst: {
        paddingLeft: 6,
        paddingRight: 10,
    },
    textColor: {
        color: "black"
    }
})


const PhotoComponent = ({ image, navigation, style }) => {
    const { images, centertext, boxshadow, roundimage, textunderImage, paddingButtom, textColor } = styles;

    return (

        <TouchableOpacity style={[paddingButtom, style]} onPress={() => navigation.navigate('Details', { imageId: image.id, image: image.urls.regular })}>

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

    )
}



const FeedComponent = ({ navigation, image }) => {
    console.log(image.images);
    const { textColor, paddingLeftAndRightForAll, paddingLeftAndRightForFirst } = styles;
    return (
        <View style={{ marginTop: 50, width, height }}>
            <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false} style={{ width, height }}>
                {image.images ? image.images.map((image, id) => <PhotoComponent key={id} image={image} navigation={navigation} style={(id === 0) ? paddingLeftAndRightForFirst : paddingLeftAndRightForAll} />) : <ActivityIndicator size="large" style={textColor}>...Fetch Data</ActivityIndicator>}
            </ScrollView>
        </View>
    )
}



export default connect(state => ({ image: state.images }))(FeedComponent);