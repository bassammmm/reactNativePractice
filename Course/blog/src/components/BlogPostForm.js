import React,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';

const BlogPostForm = (props)=>{

    const {screenTitle,onSubmit,initialValues} = props;

    const [title,setTile] = useState(initialValues.title);
    const [content,setContent] = useState(initialValues.content);



    return(
        <View>
            <Text style={styles.headStyle}>
                    {screenTitle}
            </Text>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={text=>setTile(text)}/>
            <Text style={styles.label}>Enter Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={text=>setContent(text)}/>
            <Button
                title="Save Post"
                onPress={()=>onSubmit(title,content)}
            />
        </View>

    )
}

BlogPostForm.defaultProps = {
    initialValues:{
        title:'',
        content:'',
    }
};

const styles = StyleSheet.create({
    headStyle:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom: 15,
        padding:5,
        margin:5
    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5,
    }
})

export default BlogPostForm;