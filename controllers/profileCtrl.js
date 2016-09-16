var profiles = require('../models/profiles.js')

module.exports ={
  currentUser: function(req,res,next){
    var currentFriends = [];
    req.session.currentUser.friends.map(function(friend){
      profiles.map(function(profile){
        if (friend === profile.name){
          currentFriends.push(profile);
        }
      })
    });
    res.status(200).json({
      currentUser: req.session.currentUser,
      friends: currentFriends
    });
  }
}
