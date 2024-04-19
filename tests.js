const express=require('express');

const app= express();

const port=3000;
app.listen(port, ()=>{
    console.log('example app listening on port ${port}')
});

const uri='mongodb+srv://rongbang0304:03122004l@cluster0.ssbyfzt.mongodb.net/long1';
const sv=require('./sv');
const mongoose=require('mongoose');
app.get('/', async(req, res)=>{
    await mongoose.connect(uri);
    let tests= await sv.find();
    console.log(tests);
    res.send(car);
})