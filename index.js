const express= require('express');
const port= process.env.PORT || 8000;
const app= express();

require('dotenv').config();



app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views', './views');


app.use('/',function(req,res){
    return res.send('<h1> hello </h1>')
});

// const db= require('./mongoose');


app.listen(port,function(req,res){
      console.log(`server is running at port ${port}`);
});
