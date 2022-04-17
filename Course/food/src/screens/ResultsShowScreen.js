import React,{ useState,useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import yelp from '../api/yelp';

const RestultsShowScreen = ({navigation})=>{

    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');


    console.log(result);
    const getResult = async (id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
            
    }

    useEffect(()=>{
        getResult(id);
    },[]);

    if (!result){
        return null;
    }


    return(
        <View>
            <Text style={styles.headStyle}>
                    {result.name}

            </Text>
            <FlatList
                data={result.photos}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>{
                    return(
                        <Image
                            style={styles.image}
                            source = {{uri:item}}
                        />
                    )
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    headStyle:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
    image:{
        height:120,
        width:250,
    }
})

export default RestultsShowScreen;