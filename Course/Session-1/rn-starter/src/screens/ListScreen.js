import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name:'Bassam 1'},
        {name:'Bassam 1'},
        {name:'Bassam 3'},
        {name:'Bassam 4'},
        {name:'Bassam 5'},
        {name:'Bassam 6'},
        {name:'Bassam 7'},
        {name:'Bassam 8'},
        {name:'Bassam 9'},
    ]
    return (
        <FlatList
        keyExtractor={(friend)=>{friends.indexOf(friend)}}
            data={friends}
            renderItem={({item})=>{
                 return (
                     <Text style={styles.textStyleclea}>{item.name}</Text>
                 )
            }}
        />
    )

}


const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }

})

export default ListScreen;