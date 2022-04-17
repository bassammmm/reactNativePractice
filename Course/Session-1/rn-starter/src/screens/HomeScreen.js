import React from 'react';
import { 
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity

} from 'react-native';

const HomeScreen = ({navigation}) => {
  
  return (

    <View>
        <Text style={styles.text}>Orion</Text>
        
        <Button 
          onPress={()=>{navigation.navigate("Components")}}
          title="Go to components demo"
        />
        <Button 
          onPress={()=>{navigation.navigate("List")}}
          title="Go to list demo"
        />
        <Button 
          onPress={()=>{navigation.navigate("Images")}}
          title="Go to images demo"
        />
         <Button 
          onPress={()=>{navigation.navigate("Counter")}}
          title="Go to counter demo"
        />
         <Button 
          onPress={()=>{navigation.navigate("Color")}}
          title="Go to color demo"
        />
         <Button 
          onPress={()=>{navigation.navigate("Square")}}
          title="Go to square demo"
        />
        <Button 
          onPress={()=>{navigation.navigate("Text")}}
          title="Go to text demo"
        />
        <Button 
          onPress={()=>{navigation.navigate("Box")}}
          title="Go to box demo"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    textAlign:'center',
    color:'#000'
    
  },
});

export default HomeScreen;
