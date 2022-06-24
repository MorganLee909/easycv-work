const User = require("../models/user.js");
const Cv = require("../models/cv.js");

const helper = require("../helper.js");
const bcrypt = require("bcryptjs");

module.exports = {
    /*
    POST: login a user
    req.body = {
        email: String
        password: String
    }
    response = {}
    */
    login: function(req, res){
        let u = {};
        User.findOne({email: req.body.email.toString()})
            .then((user)=>{
                if(!user) throw "user";
                u = user;

                return bcrypt.compare(req.body.password, user.password);
            })
            .then((result)=>{
                if(!result) throw "password";

                req.session.user = u.session;

                return res.json({});
            })
            .catch((err)=>{
                switch(err){
                    case "user": return res.json("User with that email doesn't exist");
                    case "password": return res.json("Incorrect password");
                    default:
                        console.error(err);
                        return res.json("ERROR: unable to login user");
                }
            });
    },

    /*
    GET: log out a user
    */
    logout: function(req, res){
        req.session.user = undefined;
        return res.json({});
    },

    /*
    GET: retrieve data for a single user
    Requires login
    */
    getOne: function(req, res){
        res.locals.user.password = undefined;
        res.locals.user.session = undefined;
        return res.json(res.locals.user);
    },

    /*
    POST: initial user creation
    req.body = {
        firstName: String
        lastName: String
        email: String
        password: String
    }
    response = User
    */
    create: function(req, res){
        let email = req.body.email.toLowerCase();
        if(req.body.password.length < 10) return res.json("Password must contain at least 10 characters");
        if(helper.validEmail(email) === false) return res.json("Invalid email");

        User.findOne({email: email})
            .then((user)=>{
                if(user !== null) throw "user";

                let salt = bcrypt.genSaltSync(10);
                let hash = bcrypt.hashSync(req.body.password, salt);

                let newCv = new Cv({
                    jobTitle: "",
                    jobCategory: "",
                    experience: 0,
                    skills: [],
                    workHistory: []
                });

                let newUser = new User({
                    email: email,
                    password: hash,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    languages: [],
                    skills: [],
                    cvs: [newCv._id],
                    session: helper.createId(25)
                });

                newCv.user = newUser._id;

                newCv.save();
                return newUser.save();
            })
            .then((user)=>{
                req.session.user = user.session;

                user.session = undefined;
                user.password = undefined;

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
    },

    /*
    PUT: update user data
    req.body = {
        email: String
        firstName: String
        lastName: String
        languages: [{
            name: String
            level: String
        }]
        skills: [String]
    }
    */
    update: function(req, res){
        let u = res.locals.user;
        if(req.body.email) u.email = req.body.email;
        if(req.body.firstName) u.firstName = req.body.firstName;
        if(req.body.lastName) u.lastName = req.body.lastName;

        if(req.body.languages) u.languages = req.body.languages;
        if(req.body.skills) u.skills = req.body.skills;

        u.save()
            .then((user)=>{
                user.password = undefined;
                user.session = undefined;

                return res.json(user);
            })
            .catch((err)=>{
                console.error(err);
                return res.json("ERROR: unable to update user data");
            });
    },

    /*
    DELETE: delete account of logged in user
    requires logged in user
    response = {}
    */
    delete: function(req, res){
        Cv.deleteMany({_id: res.locals.user.cvs})
            .then((response)=>{
                return User.deleteOne({_id: res.locals.user._id});
            })
            .then((response)=>{
                req.session.user = undefined;
                return res.json({});
            })
            .catch((err)=>{
                console.error(err);
                return res.json("ERROR: unable to delete user account");
            });
    }
}