const express = require('express');

const userRouter = require('./routes/users');
const userPostsRouter = require('./routes/posts'); // for posts assignment


const app = express(); //Calling this function sets up a server.
app.set('view engine', 'ejs');
app.use('/users', userRouter);
app.use('/posts', userPostsRouter); // for posts assignment
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.use(logger);




app.get('/', (req, res) => {
    console.log('Here');
    res.render("index", { user: "Ashton!" });
})

app.listen(3030);

function logger(req, res, next) {
    console.log(`Page Accessed: ${req.originalUrl}`);
    next();
}

