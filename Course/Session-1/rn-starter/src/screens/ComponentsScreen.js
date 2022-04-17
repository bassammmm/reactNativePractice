import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

const ComponentScreen = () => {
    return <Text style={styles.textStyle}>This is the component's Screen</Text>
};


const styles = StyleSheet.create({
    textStyle:{
        textAlign:'center',
        marginTop:30,
        fontSize:20,
        fontWeight:'bold'
    }
});

export default ComponentScreen;
