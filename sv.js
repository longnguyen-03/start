const mongoose= require('mongoose');

const sv= new mongoose.Schema({
    masv:{
        type:String,
        required:true,
    },
    ten:{
        type: String,
        required: true,
    },
    ns:{
        type:Number,
        required: true,
    },
    gt:{
        type: String,
        required: true,
    }
});

const svmodel= new mongoose.model('test', sv);
module.exports=sv;