var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config.json');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(cors(config.orgin));
app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}))

app.post('/api/login',userCtrl.login);
app.get('/api/profiles',profileCtrl.currentUser);


app.listen(config.port, function(){
  console.log('listening on port' + config.port);
});
