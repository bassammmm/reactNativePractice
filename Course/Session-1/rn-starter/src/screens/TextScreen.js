import React,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

const TextScreen = ()=>{

    const [password,setPassword] = useState('');
    // const [result,setResult] = useState('Password must be greater than 5 characters');

    // const passwordHandler = (text) => {
    //     if (text.length>5){
    //         setResult("Password is correct!")
    //     }else{
    //         setResult("Password must be greater than 5 characters")
    //     }
    //     setPassword(text);
    // }

    return(
        <View>
            <Text style={styles.headStyle}>
                    TextScreen
            </Text>
            <Text style={{...styles.enterName,marginTop:10}}>
                Enter Password :
            </Text>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                // onChangeText={(text)=>passwordHandler(text)}
                onChangeText={(text)=>setPassword(text)}
            />
            <Text style={{...styles.enterName,fontSize:20}}>
                {/* {result} */}
                {password.length>5?
                    <>
                        <Button
                            title="Something"
                        />
                        'Password is correct!'
                    </>
                    :
                    'Password must be atleast 5 characters long!'
                }

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
    enterName: {
        fontWeight:'bold',
        fontSize:30,
        textAlign:'left'    
    },
    inputStyle:{
        margin:15,
        borderColor:'black',
        borderWidth: 1,
        height:40,
    }
})

export default TextScreen;