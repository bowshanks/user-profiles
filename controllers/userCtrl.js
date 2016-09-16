var users = require('../models/users.js');

module.exports = {
  login: function(req,res,next){
    var valid = false;
    console.log(req.body)
    for (var i = 0; i < users.length; i++){
      if (users[i].name === req.body.name && users[i].password === req.body.password){
        valid = true;
        req.session.currentUser = users[i];
        break;
      }
    }
    valid ? res.send({ userFound: true }) : res.send({ userFound: false });
  }
}
