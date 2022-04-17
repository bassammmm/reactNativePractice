import React,{ useContext } from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation})=>{

    const {state,editBlogPost} = useContext(Context);

    const id = navigation.getParam('id');
    const blog = state.find((blog)=>{return blog.id===id})


    return(
        <BlogPostForm
            initialValues = {{title:blog.title,content:blog.content}}
            screenTitle="Edit"
            onSubmit={(title,content)=>{
                editBlogPost(id,title,content,()=>navigation.pop());
            }}

            
        />
    )
}

const styles = StyleSheet.create({

})

export default EditScreen;