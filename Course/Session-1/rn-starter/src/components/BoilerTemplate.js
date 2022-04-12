import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Screen = ()=>{

    return(
        <View>
            <Text style={styles.headStyle}>
                    Screen
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    headStyle:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})

export default Screen;