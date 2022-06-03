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
    newEmployers: function(req, res){
        if(req.body.employers.length < 1) return res.json("Must include at least one employer");
        
        Cv.findOne({_id: req.body.cv})
            .then((cv)=>{
                let employers = [];

                for(let i = 0; i < req.body.employers.length; i++){
                    let employer = new Employer({
                        name: req.body.name,
                        startDate : new Date(req.body.startDate),
                        endDate: req.body.endDate ? new Date(req.body.endDate) : null,
                        description: req.body.description
                    });

                    cv.workHistory.push({
                        employer: employer._id,
                        startDate: new Date(req.body.startDate),
                        endDate: req.body.endDate ? new Date(req.body.endDate) : null,
                        description: req.body.description
                    });
                    employers.push(employer);
                }
                
                cv.save().catch((err)=>{console.error(err)});
                return employers.save();
            })
            .then((employers)=>{
                return res.json(employers);
            })
            .catch((err)=>{
                console.error(err);
                return res.json("ERROR: unable to add new employers");
            });
    }
}