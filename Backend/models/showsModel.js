
const{Schema , model}= require('../connection')
 
const mySchema=new Schema({
    title: String,
    duration: String,
    // type:String,
    genre:String,
    publisher:String,
    reviews: Number,
    rating:Number,
    views:Number,
    createdaf:Date,
})
 module.exports=model('admin',mySchema)