const express = require('express');

const app = express(); //Calling this function sets up a server.
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Here');
    res.render("index", { text: "World!" });
}); //This function will run when someone goes to the root folder.

app.listen(3030);