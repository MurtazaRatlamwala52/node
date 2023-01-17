const express = require('express');
const moment = require('moment-timezone');
const app = express();

const zones = {
    Kolkata: moment().tz("Asia/Kolkata").format(),
    Los_Angeles: moment().tz("America/Los_Angeles").format(),
    Paris: moment().tz("Europe/Paris").format(),
    Sydney: moment().tz("Australia/Sydney").format(),
    London: moment().tz("Europe/London").format(), 
}

app.get('/zones', function(req, res){
    res.send(zones)
});

app.get('/zones/:city', function(req, res){
    const city = Object.keys(zones).find(key => key === req.params.city);
    if(!city){
        res.status(404).send('Error not found');
    }else {
        res.send({[city]: zones[city]});
    }
});

app.get('/', function(req, res){
    res.send('Welcome to Timezone');
});

app.listen(3000, ()=>console.log('Listening to port 3000'));