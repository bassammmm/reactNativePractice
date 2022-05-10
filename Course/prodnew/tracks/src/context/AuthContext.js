import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state,action) => {
    switch (action.type){
        case 'add_error':
            return {...state,errorMessage:action.payload};
        case 'signin':
            return {token:action.payload,errorMessage:''};
        case 'clear_error_message':
            return {...state,errorMessage:''};
        case 'signout':
            return {token:null,errorMessage:''};
        default:
            return state;
    }
};







const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token){
        dispatch({type:signin,payload:token});
        navigate('TrackList');
    }else{
        navigate('Signup');
    }
}


const clearErrorMessage = dispatch => ()=>{
    dispatch({type:'clear_error_message'});
}

const signup = dispatch => async ({email,password})=>{
        // API request for signup
        // success? authenticated
        // fail? show error
        try{
            const response = await trackerApi.post('/signup',{ email,password })
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin',payload:response.data.token})
            navigate('TrackList');
        
        }catch(err){
            dispatch({type:'add_error',payload:'Something went wrong with sign up'})
        }

}


const signin = dispatch => async ({email,password})=>{
        //sign in?
        // success change state
        // failure show error
        try{
            const response = await trackerApi.post('/signin',{email,password});
            console.log(response.data.token);
            await AsyncStorage.setItem('token',response.data.token);
            console.log("Got till here")
            dispatch({type:'signin',payload:response.data.token})
            navigate('TrackList');
        }catch(err){
            console.log(err.response.data);
            dispatch({type:'add_error',payload:'Something went wrong with sign in.'})
        }
}



const signout = dispatch => async ()=>{
        //signout

        
        await AsyncStorage.removeItem('token');
        dispatch({type:'signout'});
        navigate('loginFlow');
        
}


export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signin,
        signup,
        signout,
        clearErrorMessage,
        tryLocalSignin
    },
    {
        token:null,
        errorMessage:''
    }
)