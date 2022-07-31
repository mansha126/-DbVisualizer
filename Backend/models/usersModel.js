const{Schema , model}= require('../connection')
 
const mySchema=new Schema({
 name:String,
 email:String,
 Password:String,
 contact:String,

})
 module.exports=model('user',mySchema)