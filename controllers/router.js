const router = require('express').Router();
const persons = require('../models/person');



router.get('/', (req,res) => {
    res.render('home')
})

router.post('/', (req, res) => {
    console.log(req.body)
    const {name, email, phone, password} = req.body;
    
    const data = new persons({
        name, email, phone, password
    })

    data.save().then(resultt => {
        res.status(200)
        res.render('home')
    })
    // res.end()
})

module.exports = router