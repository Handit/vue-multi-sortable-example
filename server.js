var fs = require('fs')
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    fs.readFile(__dirname + "/dist/index.html", 'utf8', function(err, data) {
        if (err) throw err;
        res.send(data);
    });
});

app.use('/static', express.static(__dirname + '/dist/static'));

app.listen(process.env.PORT || 3000, function() {
    console.log("listening on port " + process.env.PORT || 3000)
});