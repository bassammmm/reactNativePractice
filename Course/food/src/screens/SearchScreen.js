import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import SearchBar from '../components/SearchBar';


const SearchScreen = ()=>{

    return(
        <View>
            <SearchBar/>
            <Text style={styles.headStyle}>
                    SearchScreen
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

export default SearchScreen;