var express          = require("express"),
    methodOverride   = require("method-override"),
    app              = express(),
    expressSanitizer = require("express-sanitizer"),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose");

//APP CONFIGURATION
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});


app.listen(3000, function(){
    console.log("Server has started!!!")
});