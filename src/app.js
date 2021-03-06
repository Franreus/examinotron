const express = require('express')

// express app
const app = express();
require('../db/mongoose')
const bodyParser = require('body-parser')

const test = require("../models/test")
const quizRouter = require("../routers/test")
// listen for requests
const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});


app.get('/', async (req, res) => {
    try{
        const quizs = await test.find({})
        res.render("index", {title: "Index", quizs})
    } catch(e){
        res.status(500).send()
    }
    
})

app.get('/listado', async (req, res) => {
    try{
        const quizs = await test.find({})
        res.render("index", {title: "Index", quizs})
    } catch(e){
        res.status(500).send()
    }
    
})



app.get('/create', (req, res) => {
    res.render('crear-test', {title: "Create test"})   
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/api', quizRouter)



// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});