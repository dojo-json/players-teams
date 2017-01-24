var express = require('express'),
    bp = require('body-parser'),
    path = require('path');

var app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));

var routes = require(path.resolve('server', 'config', 'routes'))(app);

app.listen(8000, function() {
  console.log('server started on port 8000');
});
