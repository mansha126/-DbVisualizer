const Model = require('../models/showsModel');
const router = require('express').Router();

router.post('/add',(req,res) => {
    console.log(req.body)
    new Model(req.body).Save()
    .then((result) => {
        console.log(result)
        console.log('data saved')
        res.json(result)
        
    }).catch((err) => {
        console.error(err)
        res.json(err)
    });

})

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);        
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
    //res.send('get all from user router')
})
module.exports=router;