const express = require('express');
const fs = require('node:fs');
const app = express();


const readDirectory = fs.readdir('./', function(err , files){
    if(err) {
        console.log('Error', err)
    }else{
app.get('/', (req,res) => res.send(files));
        console.log('Result', files)
    }  
})

app.listen('3000', () => console.log('Listening to port 3000'));