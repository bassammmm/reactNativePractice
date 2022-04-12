import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';


const ImageDetail = (prop) =>{

    return(
        <View>
            <Image
                source={prop.imagesrc}
            />

            <Text>{prop.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default ImageDetail;