import React,{useContext,useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
const IndexScreen = ({navigation})=>{

    const {state,deleteBlogPost,getBlogPosts} = useContext(BlogContext);

    useEffect(()=>{
        getBlogPosts();
        const listener = navigation.addListener('didFocus',()=>{
            getBlogPosts();
        });
        return ()=>{
            listener.remove();
        }
    },[]);

    return(
        <View>

            <FlatList
                data={state}
                keyExtractor={blog=>blog.id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity
                            onPress={()=>{navigation.navigate(
                                                                "Show",
                                                                {id:item.id}
                                                            )
                                        }}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.id}
                                </Text>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <TouchableOpacity
                                    onPress={()=>{deleteBlogPost(item.id)}}
                                >
                                    <Feather name="trash" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>

    )
}

IndexScreen.navigationOptions = ({navigation}) => {
        return {
            headerRight:()=> <TouchableOpacity
                                onPress={()=>{navigation.navigate("Create")}}
                                style={{marginRight:10}}
                             >
                                <Feather name="plus" size={24} color="black" />
                             </TouchableOpacity>

        };
};

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18,
    }
})

export default IndexScreen;