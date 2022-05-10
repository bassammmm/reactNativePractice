import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'https://efb7-2400-adc1-1e8-e900-693d-9951-ca61-43fa.in.ngrok.io'
})


instance.interceptors.request.use(

    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (err) => {
        return Promise.reject(err);
    }

)

export default instance;