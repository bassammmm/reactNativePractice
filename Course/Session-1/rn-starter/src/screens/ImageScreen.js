import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';
import ImageDetail from '../components/ImageDetail';



const ImageScreen = ({navigation}) =>{

    return(
        <>
            <Text style={styles.headStyle}>
                Image Screen
            </Text>

            <ImageDetail
                imagesrc={require("../../assets/forest.jpg")}
                title="Forest"
            />
            <ImageDetail
                imagesrc={require("../../assets/mountain.jpg")}
                title="Mountain"
            />
            <ImageDetail
                imagesrc={require("../../assets/beach.jpg")}
                title="Beach"
            />

        </>
    )
}

const styles = StyleSheet.create({
    headStyle:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})


export default ImageScreen;