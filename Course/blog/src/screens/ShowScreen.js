import React,{ useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const ShowScreen = ({navigation})=>{

    const {state} = useContext(Context);

    const id = navigation.getParam('id');
    const blog = state.find((blog)=>{return blog.id===id})
    
    return(
        <View>
            <Text style={styles.headStyle}>
                {blog.title}
            </Text>
            <Text>
                {id}    
            </Text>
            <Text>
                {blog.content}
            </Text>

        </View>

    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight:()=> <TouchableOpacity
                            onPress={()=>{navigation.navigate("Edit",{id:navigation.getParam('id')})}}
                            style={{marginRight:10}}
                         >
                            <Feather name="edit-3" size={24} color="black" />
                         </TouchableOpacity>

    };
};
const styles = StyleSheet.create({
    headStyle:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})

export default ShowScreen;