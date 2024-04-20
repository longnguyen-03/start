const express=require('express');

const app= express();

const port=3000;

app.listen(port, () => {
    console.log(`Eample app listening on port ${port}`)
});

const uri='mongodb+srv://rongbang0304:03122004l@cluster0.ssbyfzt.mongodb.net/long1';
const sv=require('./sv');
const mongoose=require('mongoose');
const svmodel = require('./sv');
app.get('/', async(req, res)=>{
    await mongoose.connect(uri);
    let tests= await sv.find();
    console.log(tests);
    res.send(tests);
})

app.get('/xoa:id',  async(req, res) => {
    await mongoose.connect(uri);
    let id= req.params.id;
    console.log(id);
    await svmodel.deleteOne({_id:id});
    res.redirect('../')
})

app.get('/update/:ten',async (req, res) => {
    await mongoose.connect(uri);
    let ma=req.params.ma;
    console.log(ma);
    let masvmoi=ma +'sv moi';
    await svmodel.updateOne({ma: ma}, {ma: masvmoi});
    let svn= await svmodel.find({});
    res.send(svn);
})