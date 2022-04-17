import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = (props)=>{
    const {term,onTermChange,onTermSubmit} = props;
    return(
        <View style={styles.background}>
            <AntDesign 
                name="search1" 
                size={40} 
                color="black"
                style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textStyle}
                placeholder='Search'
                value={term}
                onChangeText={(newValue)=>{onTermChange(newValue)}}
                onEndEditing={()=>onTermSubmit()}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor:'#F0EEE9',
        height:50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginBottom:10,
    },
    textStyle:{
        flex:1,
        borderColor:'black',
        alignSelf:'stretch',
        fontSize:18,
        
    },
    iconStyle:{
        marginHorizontal:8,
    }
})

export default SearchBar;