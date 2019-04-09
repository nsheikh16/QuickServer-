var express = require('express');
var app = express();


var HttpStatus = require('http-status-codes');
var cors = require('cors');

app.use(cors());

const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
let db;
MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    db=client.db("mydb");
});



// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    db.collection('postings').find({}).toArray(function(err, result) {
        if (err) throw err;
        res.status(HttpStatus.OK).send(result);
    });
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    if(req.headers.title == null 
        ||req.headers.author == null
        ||req.headers.summary == null
        ||req.headers.description == null
        ||req.headers.price == null) {
        res.status(HttpStatus.NOT_FOUND).send("error, missing arguments in the header");
    }else{
        var posting ={
            title:req.headers.title,
            author:req.headers.author,
            summary:req.headers.summary,
            description:req.headers.description,
            price:req.headers.price
        };
        console.log(posting)
        db.collection('postings').insertOne(posting, function(err, results) {
            if (err) throw err;
            res.status(HttpStatus.OK).send("1 document inserted");
          });
    }

})

// This responds a DELETE request for the /del_user page.
app.delete('/', function (req, res) {
   console.log("Got a DELETE request for /del_user");



   res.send('Hello DELETE');


})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})