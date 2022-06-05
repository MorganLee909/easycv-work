const User = require("./models/user.js");

module.exports = {
    user: function(req, res, next){
        if(!req.session.user) return res.json("No user logged in");

        User.findOne({session: req.session.user})
            .then((user)=>{
                if(!user) throw "user";

                res.locals.user = user;
                next();
            })
            .catch((err)=>{
                switch(err){
                    case "user": return res.json("User does not exist");
                    default:
                        console.error(err);
                        return res.json("ERROR: unable to log in user");
                }
            });
    }
}