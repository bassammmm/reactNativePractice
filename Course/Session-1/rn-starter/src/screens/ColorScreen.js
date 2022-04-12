import React,{useState} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList
} from 'react-native';


const randomRGB = () =>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`
}


const ColorScreen = ()=>{
    const [colors,setColors] = useState([]);
    return(
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.headStyle}>
                    ColorScreen
            </Text>
            <Button
                title="Add a Color"
                onPress={()=>{
                        setColors([...colors,randomRGB()])
                }}
            />

            <FlatList
                keyExtractor={(item,index)=>index.toString()}
                data={colors}
                renderItem={({item})=>{
                    return(
                        <View style={{marginTop:10,height:100,width:100,backgroundColor:item}}>
                                {console.log(item)}
                        </View>
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
    }
})

export default ColorScreen;