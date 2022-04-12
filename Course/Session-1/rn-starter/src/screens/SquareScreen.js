import React,{useReducer} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_ADJUST=50;


const reducer = (state,action) =>{
    // state === {red :number, green :number, blue :number}
    // action === {type: 'red'||'green'||'blue', payload:15}

    switch (action.type){
        case 'chenge_red':
            return state.red+action.payload>255 || state.red+action.payload<0 ?
                state
                :
                {...state,red: state.red+action.payload};
        
        case 'chenge_green':
            return state.green+action.payload>255 || state.green+action.payload<0 ?
                state
                :
                {...state,green: state.green+action.payload};
           
            
        case 'chenge_blue':
            return state.blue+action.payload>255 || state.blue+action.payload<0 ?
                state
                :
                {...state,blue: state.blue+action.payload}; 
            
            
        default:

            return state;
    }
}

const SquareScreen = ()=>{


    const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0})
    const {red,green,blue} = state;
    return(
        <View>
            <Text style={styles.headStyle}>
                    SquareScreen
            </Text>
            <ColorCounter
                color='Red'
                onIncrease={()=>dispatch({type:'chenge_red',payload:COLOR_ADJUST})}
                onDecrease={()=>dispatch({type:'chenge_red',payload:-1*COLOR_ADJUST})}
            />
            <ColorCounter
                color='Green'
                onIncrease={()=>dispatch({type:'chenge_green',payload:COLOR_ADJUST})}
                onDecrease={()=>dispatch({type:'chenge_green',payload:-1*COLOR_ADJUST})}


            />
            <ColorCounter
                color='Blue'
                onIncrease={()=>dispatch({type:'chenge_blue',payload:COLOR_ADJUST})}
                onDecrease={()=>dispatch({type:'chenge_blue',payload:-1*COLOR_ADJUST})}


            />

            <View style={{alignSelf:'center',marginTop:50,height:240,width:240,backgroundColor:`rgb(${red},${green},${blue})`}}>
                           
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headStyle:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})

export default SquareScreen;