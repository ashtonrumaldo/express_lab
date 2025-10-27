const express = require('express');

const app = express(); //Calling this function sets up a server.

app.get('/', (req, res) => {
    console.log('Here');
    res.send("Hello!");
}); //This function will run when someone goes to the root folder.

app.listen(3030);