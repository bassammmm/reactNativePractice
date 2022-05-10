import React,{useContext} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const SigninScreen = ({navigation})=>{
    const {state,signin,clearErrorMessage} = useContext(AuthContext);
    return(
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={()=>{clearErrorMessage()}}
            />
            <AuthForm
                headerText="Sign In to Your Account"
                errMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={({email,password})=>signin({email,password})}
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign up instead."
            />

        </View>



    )
}


SigninScreen.navigationOptions = ()=>{
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:150,
    },
})

export default SigninScreen;