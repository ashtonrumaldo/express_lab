const express = require('express');

const userRouter = require('./routes/users');

const app = express(); //Calling this function sets up a server.
app.set('view engine', 'ejs');
app.use('/users', userRouter);

app.get('/', (req, res) => {
    console.log('Here');
    res.render("index", { user: "Ashton!" });
});

app.get('/users', (req, res) => {
    res.send('User List');
});

app.get('/users/new', (req, res) => {
    res.send('New User Form');
});

