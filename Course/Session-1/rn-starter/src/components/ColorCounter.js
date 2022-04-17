import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const ColorCounter = (prop)=>{

    return(
        <View style={styles.viewStyleParent}>
            <Text style={styles.headStyle}>{prop.color}</Text>
            <View style={styles.viewStyle}>
                <TouchableOpacity 
                    style={{width:50,height:90,backgroundColor:'rgb(1,255,1)',justifyContent: 'center'}}
                    onPress={()=>prop.onDecrease()}
                >
                    <Text style={[styles.markerStyle,{color:'#000'}]}>-</Text>
                </TouchableOpacity>
                
                <View style={styles.line}></View>
                
                <TouchableOpacity 
                    style={{width:50,height:90,backgroundColor:'rgb(255,1,1)',justifyContent: 'center'}}
                    onPress={()=>prop.onIncrease()}
                >
                    <Text style={[styles.markerStyle,{color:'#fff'}]}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    line:{
        height:90,
        width:5,
        backgroundColor:'#000'
    },
    viewStyleParent:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    },
    viewStyle:{
        alignSelf:'center',
        borderWidth:5,
        width:100,
        height:100,
        borderRadius:50,
        flexDirection:'row',
        justifyContent:'center',
        overflow:'hidden',
    },
    headStyle:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
    ,markerStyle:{
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center',
        
    }
})

export default ColorCounter;