const User = require("../models/user.js");

const helper = require("./helper.js");
const bcrypt = require("bcryptjs");

module.exports = {
    /*
    POST: initial user creation
    req.body = {
        firstName: String
        lastName: String
        email: String
        password: String
    }
    */
    createUser: function(req, res){
        let email = req.body.email.toLowerCase();
        if(req.body.password.length < 10) return res.json("Password must contain at least 10 characters");
        if(helper.validEmail(email) === false) return res.json("Invalid email");

        User.findOne({email: email})
            .then((user)=>{
                if(user !== null) throw "user";

                let salt = bcrypt.genSaltSync(10);
                let hash = bcrypt.hashSync(req.body.password, salt);

                let newUser = new User({
                    email: email,
                    password: hash,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
                });

                return newUser.save();
            })
            .then((user)=>{
                return res.json(user);
            })
            .catch((err)=>{
                switch(err){
                    case "user": return res.json("User with this email already exists");
                    default:
                        console.error(err);
                        return res.json("ERROR: unable to create new user");
                }
            });
    }
}