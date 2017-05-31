var express = require("express");

var app = express();

app.listen(3000,function(){
     console.log("server is running on:");
    console.log("http://localhost:3000/");
    console.log("to open in browser Ctr + click on it");
});


app.get("/",function(req,res) {
    res.send("hello from Express of Node +gulp");
    res.end();
})

app.get("/books",function(req,res) {
    res.send("hello from book page");
    res.end();
})
app.get("/authors",function(req,res) {
    res.send("hello from book authors");
    res.end();
})

