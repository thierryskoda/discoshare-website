var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 3000;

// Used for production build
app.use(express.static(path.join(__dirname)));

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});
