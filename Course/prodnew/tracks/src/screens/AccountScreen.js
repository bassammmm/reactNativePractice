import React,{useContext} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = ()=>{
    const {signout} = useContext(AuthContext)
    return(
        <SafeAreaView forceInset = {{top:'always'}}>
            <Text style={styles.headStyle}>
                    AccountScreen
            </Text>
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={signout}
                />
            </Spacer>

        </SafeAreaView>

    )
}

AccountScreen.navigationOptions = {
    title:"Account",
    tabBarIcon: <FontAwesome name="gear" size={24} color="black" />
}

const styles = StyleSheet.create({
    headStyle:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})

export default AccountScreen;