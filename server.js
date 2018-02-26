var path = require("path");
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/dist'));

app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(process.env.PORT || 3000, function() {
    console.log("listening on port " + (process.env.PORT || 3000))
});