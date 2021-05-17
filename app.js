const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const ejs = require("ejs");

//Models
const Post = require('./models/model')

//Routes
const regisrouter= require('./routes/register')
const indexrouter= require('./routes/index')
const homeRouter = require('./routes/home')
const composeRouter = require('./routes/compose')
const postRouter = require('./routes/post')




app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.use(regisrouter);
app.use(homeRouter);
app.use(composeRouter);
app.use('/posts',postRouter);
app.use(indexrouter);






app.listen(3000, function() {
  console.log("Server started on port 3000");
});
