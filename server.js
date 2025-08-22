const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://harinimanikandan316:Harini2005@cluster0.dwmchqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("MongoDB Atlas connected"))
.catch(err=>console.log(err));
const itemRoutes=require('./routes/itemRoutes');
app.use('/api/items',itemRoutes);
