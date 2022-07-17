const mongoose = require('mongoose');

const url ="mongodb+srv://Rajil:126926@cluster0.03ppi.mongodb.net/mernmttf330?retryWrites=true&w=majority"

//promise
mongoose.connect(url)//this line is used to connect with database   to server 
.then(() => {
    console.log('Connected to database')
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;