import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Import and configure dotenv
import dotenv from 'dotenv';
dotenv.config();


import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
//23%40mongodb
//mongodb+srv://crislearns1:appmongo123@cluster0.dijlwco.mongodb.net/student?retryWrites=true&w=majority
const CONNECTION_URL = "mongodb+srv://crislearns1:appmongo123@cluster0.dijlwco.mongodb.net/student?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
})

//here one of the below things is not added
//mongoose.set('findOneAndUpdate', false);


