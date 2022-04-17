import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const ResultsDetails = ({result})=>{

    return(
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={{uri:result.image_url}}
                
            />
            <Text style={styles.name}>
                    {result.name}
            </Text>
            
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>

        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
        
    },
    imageStyle:{
        width:250,
        height:120,
        borderRadius:5,
    },
    name:{
        fontWeight:'bold',
        fontSize:16,
    }
})

export default ResultsDetails;