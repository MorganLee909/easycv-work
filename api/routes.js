const user = require(`${__dirname}/controllers/user.js`);
const employer = require(`${__dirname}/controllers/employer.js`);

const mid = require("./middleware.js");

module.exports = (app)=>{
    app.get("/api", (req, res)=>{return res.sendFile(`${__dirname}/api.html`)});

    //USER
    app.post("/api/user", user.createUser);

    //EMPLOYER
    app.post("/api/employer", mid.user, employer.newEmployers);
}