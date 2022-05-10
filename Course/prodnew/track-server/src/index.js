require('./models/User.js')
require('./models/Track.js')
const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middleware/requireAuth');


const app = express();


app.use(bodyparser.json());
app.use(authRoutes);
app.use(trackRoutes);



const mongoUri = 'mongodb+srv://admin:admin@cluster0.dttl1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser:true
});

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo');
})

mongoose.connection.on('error',(err)=>{
    console.log('Error connecting to mongo',err);
})



app.get('/',requireAuth,(req,res)=>{
    res.send(`Your email : ${req.user.email}.`);
});


app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
})