const express = require('express');
const app = express();

app.use(function(req,res, next){
    if(!req.query.age){
        const err = new Error('No age Entered')
        err.status = 404;
        res.send('Please Enter Age')
    }else if(req.query.age<18){
        res.send('You cannot access this WebPage')
    }else{
        next()
    }
})

app.get('/', (req,res) => {
    console.log("Home Page")
    res.send('Welcome to Home Page')
})

app.listen(3000, () =>{
    console.log("Listening to port 3000")
})