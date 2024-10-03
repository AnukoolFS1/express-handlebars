const router = require('express').Router();
const persons = require('../models/person');



router.get('/', (req, res) => {
    res.render('home')
})
router.get('/update', (req, res) => {
    res.render('edit')
})
router.get('/delete', (req, res) => {
    res.render('delete')
})

router.post('/', (req, res) => {
    const { name, email, phone, password } = req.body;

    const data = new persons({
        name, email, phone, password
    })

    data.save().then(resultt => {
        res.status(200)
        res.render('home')
    })
    // res.end()
})

router.post('/update', async (req, res) => {
    const { name, email, phone, password } = req.body;

    let result  = await persons.findOneAndUpdate({ name }, { email, phone, password })

    if(!result){
        res.status(400)
        res.end('<h1>No Member Found</h1>')
    }else{
        res.render('edit')
    }
})

router.post('/delete', async (req, res) => {
    const name = req.body.name;

    let result = await persons.deleteOne({name});
    if(result){
        res.render('delete');
    }else{
        res.status(400).json({msg:'member not found'})
    }
})

module.exports = router