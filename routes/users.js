const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('User List');
});
router.get('/new', (req, res) => {
    res.send('New User Form');
});

// router.get('/:id',(req, res)=>{
//     res.send(`Getting user data: ${req.params.id}`);
// });
router.route("/:id").get((req, res)=>{
    res.send(`Getting user data: ${req.params.id}`);
}).delete((req, res)=>{
    res.send(`Deleting user with id: ${req.params.id}`);
}).put((req, res)=>{
    res.send(`Updating user with id: ${req.params.id}`);
});

router.param("id", (req, res, next, id)=> {
    console.log(`Accessing User #${id}`);
    next();
});

module.exports = router;