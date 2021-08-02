const express = require('express');
const app = express();
const dotenv = require('dotenv/config');
const mongoose = require('mongoose');


//Importing routes
const authRoute = require('./routes/authorization');
const postRoute = require('./routes/posts');

//connecting to database
const connectDB = async (req, res)=>{
    const conn = await mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    });
    try {
        console.log(`mongoDB connected to ${conn.connection.host}`);
    } catch (error) {
        return res.status(400).send(error);
    }
}
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Route middlewares
app.use('/api/auth', authRoute);
app.use('/api/posts',postRoute);



//server port
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server up and running on http://localhost:${PORT}`)
});
