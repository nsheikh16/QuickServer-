var express = require('express');
var app = express();

var HttpStatus = require('http-status-codes');
var cors = require('cors');

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
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

app.put('/', function(req,res){
    console.log("Got a PUT request from the create page");




    if(req.body==null){
        console.log('no body')
        res.send("improper body");
    }
    else{
        console.log(req)



        var title=req.body.title
        var author=req.body.author
        var summary = req.body.summary
        var description = req.body.description
        var price = req.body.price
        var newvalues={$set: {"title":title,"author":author,"summary":summary,"description":description,"price":price} };
        db.collection('postings').updateOne({_id:ObjectID(req.body._id)}, newvalues, function(err,ress){
            if (err) throw err;
            console.log(req.body);
            res.status(HttpStatus.OK).send("document updated"); 
        })  

    }

})

// This responds a DELETE request for the /del_user page.
app.delete('/', function (req, res) {
    console.log("Got a DELETE request for /del_user");

    if(req.headers._id==null){
        res.status(HttpStatus.IM_A_TEAPOT).send("header not valid");
    }else{
        console.log(req.headers._id)
        db.collection('postings').deleteOne({_id:ObjectID(req.headers._id)},function(err,results){
            if(err) throw err;
            res.status(HttpStatus.OK).send("Sucessfully deleted "+req.headers._id);
        });
    }
})





app.post('/login',function(req,res){
    console.log("got a POST request for login creating a new user")
    console.log(req.body)
    res.status(HttpStatus.OK).send(req.body);
})

app.get('/login', function(req,res){
    console.log("Got a GET request for login")
    res.status(HttpStatus.OK).send("got");
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})