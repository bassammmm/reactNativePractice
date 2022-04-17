import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer zHYZmnzCPvmYe4WHEWOaaLzoWsYta5FErkzDMKMMlnZLT8KI9S-JXOAOF2X4SIADFN9ZMCKwegrK2O0lnBhBT6kF605lXbmsU6K2p7RC7FukQAGrIt2-q7RG6vlTYnYx'
    }
})