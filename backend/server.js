var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const cors=require('cors');

app.use(bodyParser.json());
app.use(cors())
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
   // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
var messages = [{
    text : "Some random text",owner : "Firdous"
},{
    text : "Some random second text",owner : "Alam"
},{
    text : "Some random Third text",owner : "Zuni"
}];
var api = express.Router();
api.get('/message',(req,res)=>{
   
    res.json(messages);
});

api.post('/message',(req,res)=>{
    console.log("post api hit");
   console.log(req.body);
   messages.push(req.body);
    res.json(req.body);
});
app.use('/api',api)
app.listen(5000);