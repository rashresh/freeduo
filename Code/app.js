const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb+srv://admin:@cluster0.vat3c.mongodb.net/FormData", {useNewUrlParser: true, useUnifiedTopology: true});


const schema ={

    Timestamp : String,
    Name : String,
    Phone : String,
    Email : String,
    Service : String,
    Message : String};


const schema2 ={

    Timestamp : String,
    Name : String,
    Phone : String,
    Email : String,
    Service : String,
    Message : String,
    InstaId : String,
    Website : String};


const contact = mongoose.model ("contact",schema );
const analysis = mongoose.model ("analysis",schema2 );



app.get("/:Path", function(req, res){

    var path = req.params.Path;

    res.sendFile(__dirname + "/" + path,function(err){


        if(err){

            res.redirect("/");

        }

    });

});


app.post("/contactus.html",function(req, res){




    var fname = req.body.fname;
    var phone = req.body.Phone;
    var email = req.body.Email;
    var service = req.body.Service;
    var message = req.body.Message;
    var date = new Date();

    const contactdata = new contact({

        Timestamp : date,
        Name : fname,
        Phone : phone,
        Email : email,
        Service : service,
        Message : message

    });

    contactdata.save(function(err){
        if (!err){
            res.redirect("/thankyou.html");
        }
    });




});


app.post("/analysis.html",function(req, res){




    var fname = req.body.fname;
    var phone = req.body.Phone;
    var email = req.body.Email;
    var service = req.body.Service;
    var message = req.body.Message;
    var insta = req.body.Insta;
    var website = req.body.Website;
    var date = new Date();



    var analysisdata = new analysis({

        Timestamp : date,
        Name : fname,
        Phone : phone,
        Email : email,
        Service : service,
        Message : message,
        InstaId : insta,
        Website : website
    });


    console.log(analysisdata);
analysisdata.save(function(err){

    console.log(err);

    if (!err){
        res.redirect("/thankyou.html");
    }
});



});






app.get('*', function(req, res){
    res.sendFile(__dirname + "/index.html");


});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 80;
}

app.listen(port,function(){

    console.log("server is running");


});