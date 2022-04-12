import React,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_ADJUST=50;
const SquareScreen = ()=>{
     
    const [red,setRed] = useState(0)
    const [green,setGreen] = useState(0)
    const [blue,setBlue] = useState(0)

    const setColor = (color,change) => {
        
        switch (color){
            case 'red':
                (red+change>255 || red+change<0) ?  
                null 
                : 
                setRed(red+change);
                return;
                
            case 'green':
                (green+change>255 || green+change<0)?
                null
                :
                setGreen(green+change);
                return;
                
            case 'blue':
                (blue+change>255 || blue+change<0)?
                null
                :
                setBlue(blue+change);
                return;
            default:
                return;
        }

    };



    return(
        <View>
            <Text style={styles.headStyle}>
                    SquareScreen
            </Text>
            <ColorCounter
                color='Red'
                onIncrease={()=>{
                    setColor('red',COLOR_ADJUST)
                }}
                onDecrease={()=>{
                    setColor('red',-1*COLOR_ADJUST)
                }}
            />
            <ColorCounter
                color='Green'
                onIncrease={()=>{
                    setColor('green',COLOR_ADJUST)
                }}
                onDecrease={()=>{
                    setColor('green',-1*COLOR_ADJUST)
                }}

            />
            <ColorCounter
                color='Blue'
                onIncrease={()=>{
                    setColor('blue',COLOR_ADJUST)
                }}
                onDecrease={()=>{
                    setColor('blue',-1*COLOR_ADJUST)
                }}

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