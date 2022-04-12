import React,{useState,useReducer} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';

const reducer = (state,action) => {
    switch (action.type){
        case 'inc_count':
            return {...state, count: state.count+1 };
        case 'dec_count':
            return {...state, count: state.count-1 };
        default:
            return state;
    }
}

const CounterScreen = ()=>{
    
    const [state,dispatch] = useReducer(reducer,{count:0})
    const {count}=state; 
    // const [count,setCount] = useState(0);

    return(
        <View>
            <Text style={styles.headStyle}>
                    CounterScreen
            </Text>
            <Button 
                title="Increase"
                onPress={()=>{dispatch({type:'inc_count'})}}
            />
            <Button
                title="Decrease"
                onPress={()=>{dispatch({type:'dec_count'})}}
            />

            <Text style={styles.textStyle}>
                Current Count : {count}
            </Text>
        </View>
        

    )
}

const styles = StyleSheet.create({
    headStyle:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
    textStyle:{
        marginTop:30,
        fontWeight:'400',
        fontSize:15,
        textAlign:'center'
    }
})

export default CounterScreen;