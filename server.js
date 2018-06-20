var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  

// var myAPIid= "alP86WKYJCOt1TqaIOAsdmuC1zJ_hnMV";

// var dbx = mongo.connect("https://api.mlab.com/api/1/databases?apiKey="+myAPIid, function(err, response){  
//     if(err){ console.log( err); }  
//     else{ console.log('Connected to ' + dbx, ' + ', response); }  
//  });  
  
var db = mongo.connect("mongodb://akash07:akash07@ds257590.mlab.com:57590/mark1", function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
   
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  

 var schema= mongo.Schema;

 var adminSchema = new schema({      
    id: { type: String   },       
    password: { type: String   },   
   },{ versionKey: false });  


   
var model = mongo.model('admin', adminSchema, 'admin');


app.get("/api/getUser",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  })  
  
  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
});  