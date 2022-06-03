const user = require(`${__dirname}/controllers/user.js`);
const cv = require(`${__dirname}/controllers/cv.js`);
const employer = require(`${__dirname}/controllers/employer.js`);

const mid = require("./middleware.js");

module.exports = (app)=>{
    app.get("/api", (req, res)=>{return res.sendFile(`${__dirname}/api.html`)});
    app.get("/api/css", (req, res)=>{return res.sendFile(`${__dirname}/api.css`)});

    //USER
    app.post("/api/login", user.login);
    app.get("/api/logout", user.logout);
    app.post("/api/user", user.create);
    app.put("/api/user", mid.user, user.update);

    //CV
    app.put("/api/cv", mid.user, cv.update);

    //EMPLOYER
    app.post("/api/employer", mid.user, employer.create);
}