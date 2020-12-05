const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const post = new Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required:true
    },
    date:{
        type: Date,
        default: Date.now(),
        required:true
    }
})


mongoose.model('Post', post)