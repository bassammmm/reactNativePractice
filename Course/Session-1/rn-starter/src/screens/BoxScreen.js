import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const BoxScreen = ()=>{

    return(
        <View>

            <View style={styles.viewStyle}>
                <Text style={styles.textOneStyle}>
                        Child - 1
                </Text>
                <Text style={styles.textTwoStyle}>
                        Child - 2
                </Text>
                <Text style={styles.textThreeStyle}>
                        Child - 3
                </Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    viewStyle:{
        height:200,
        borderWidth:3,
        borderColor:'red',
        // flexDirection:'column',
        alignItems:'stretch',
        justifyContent:'space-between'
    },

    textOneStyle:{
        borderWidth:3,
        borderColor:'blue',
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor:'blue',
        // top:40
        // position:'absolute',
        // top:0,
        // bottom:0,
        // left:0,
        // right:0,
        // ...StyleSheet.absoluteFillObject,
    },
    textThreeStyle:{
        borderWidth:3,
        borderColor:'blue',
    },
})

export default BoxScreen;