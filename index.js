const express= require('express');
const port=3000;
const app= express();

require('dotenv').config();



app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views', './views');

app.use(express.static('assets'));

app.use('/',function(req,res){
    return res.render('home');
});

const db= require('./mongoose');


app.listen(port,function(req,res){
      console.log(`server is running at port ${port}`);
});
