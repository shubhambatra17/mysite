var express = require('express'),
	html = require('html'),
	cons = require('consolidate');
var app = express();

app.engine('html', cons.swig);
app.set('views', __dirname);
app.set('view engine','html')

app.use('/', express.static(__dirname + '/RScard_files'));
app.use('/', express.static(__dirname + '/RScard_files'));
app.use('/', express.static(__dirname + '/RScard_files'));

app.get('/', function(req,res){

res.render('RScard.html');
});

app.listen(8888);
console.log("server is running on port 8888" );
