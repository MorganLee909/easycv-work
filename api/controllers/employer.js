const Cv = require("../models/cv.js");
const Employer = require("../models/employer.js");

module.exports = {
    /*
        POST: Create new employer and add to user
        req.body = {
            cv: String id
            employers: [{
                name: String,
                startDate: Date,
                endDate: Date
                description: String
            ]}
        }
        response = [Employer]
    */
    create: function(req, res){
        if(req.body.employers.length < 1) return res.json("Must include at least one employer");
        
        Cv.findOne({_id: req.body.cv})
            .then((cv)=>{
                if(!cv) throw "cv";
                let employers = [];

                for(let i = 0; i < req.body.employers.length; i++){
                    let e = req.body.employers[i];

                    let employer = new Employer({
                        name: e.name
                    });

                    cv.workHistory.push({
                        employer: employer._id,
                        startDate: new Date(e.startDate),
                        endDate: e.endDate ? new Date(e.endDate) : null,
                        description: e.description
                    });
                    employers.push(employer);
                }
                
                cv.save().catch((err)=>{console.error(err)});
                return Employer.insertMany(employers);
            })
            .then((employers)=>{
                return res.json(employers);
            })
            .catch((err)=>{
                switch(err){
                    case "cv": return res.json("That CV does not exist");
                    default:
                        console.error(err);
                        return res.json("ERROR: unable to add new employers");
                }
            });
    },

     /*
    GET: search employers based on a string
    req.query = {
        s: String
    }
    response = [Employer]
    */
    retrieve: function(req, res){
        Employer.aggregate([
            {$match: {$text: {$search: req.query.s}}}
        ])
            .then((employers)=>{
                return res.json(employers);
            })
            .catch((err)=>{
                console.error(err);
                return res.json("ERROR: unable to perform search");
            });
    }
}