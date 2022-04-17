import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetails from './ResultsDetails';

const ResultsList = ({title, results, navigation})=>{

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                    {title}
            </Text>
            
            <FlatList
                horizontal
                data={results}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity
                            onPress={()=>{navigation.navigate("ResultsShow",{id:item.id})}}
                        >
                            <ResultsDetails
                                result={item}
                            />
                        </TouchableOpacity>
                    )
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
    },
    title:{
        marginLeft:15,
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5
    }
})

export default withNavigation(ResultsList);