var fs = require('fs')
var express = require('express');
var app = express();

app.use("/", express.static(__dirname + "/dist"));
app.use('/static', express.static(__dirname + '/dist/static'));

app.listen(process.env.PORT || 3000, function() {
    console.log("listening on port " + (process.env.PORT || 3000))
});