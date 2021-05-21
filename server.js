const express = require('express')
const mongoose  = require('mongoose');
const multer = require('multer');
const path = require('path')
const User = require('./models/model')
const auth = require('./models/auth')
var util = require('util')
var GridFsStorage = require('multer-gridfs-storage')
//const url = 
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/imguser',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology : true
})
var storage = new GridFsStorage({db:mongoose.connection})
    
//     filename: function (req, file, cb){
//         cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
//     }
// })
var Upload = multer({storage:storage})

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})
app.post('/creatUser', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})

app.get('/login', (req, res) => {
    res.render('login')
    console.log(req.body)
})
app.post('/login', (req, res) => {
    res.send(req.body)
})
app.get('/index', (req, res) => {
res.render('index')
})

app.post('/imgure', Upload.single('image'), (req, res, next) => {
    //const file = req.file;
    res.send(req.file)
    next();
})
app.get('/imgure',(req,res) => {
    const imgUser = imguser.find()
    res.redirect('/imgure',{User: imgUser})
})

app.listen(3000, (req, res) => {
    console.log('server started @ 3000')
})