const express = require('express');

const app = express(); //Calling this function sets up a server.
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Here');
    res.render("index", { user: "Ashton!" });
}); //This function will run when someone goes to the root folder.

app.get('/users', (req, res) => {
    res.send('User List');
});

app.get('/users/new', (req, res) => {
    res.send('New User Form');
});






app.listen(3030);