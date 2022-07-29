const Model = require('../models/showsModel');
const router = require('express').Router();

router.post('/add',(req,res) => {
    console.log(req.body)
    new Model(req.body).save()
    .then((result) => {
        console.log(result)
        console.log('data saved')
        res.json(result)
        
    }).catch((err) => {
        console.error(err)
        res.json(err)
    });
    router.post('/authenticate', (req, res) => {

        Model.findOne({email : req.body.email, password : req.body.password})
        .then((userdata) => {
            if(userdata){
                res.status(200).json(userdata);
            }else{
                res.status(300).json({message : 'Invalid Credentials'});
            }
        })
        .catch((err) => {
            console.error(err);
            res.json(err);
        })
    })

})

module.exports = router;