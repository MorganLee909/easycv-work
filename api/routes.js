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
    app.get("/api/user", mid.user, user.getOne);
    app.post("/api/user", user.create);
    app.put("/api/user", mid.user, user.update);
    app.delete("/api/user", mid.user, user.delete);

    //CV
    app.get("/api/cv/:cv", cv.retrieve);
    app.get("/api/cv", mid.user, cv.retrieveMany);
    app.post("/api/cv", mid.user, cv.create);
    app.put("/api/cv", mid.user, cv.update);
    app.delete("/api/cv/:cv", mid.user, cv.delete);

    //EMPLOYER
    app.post("/api/employer", mid.user, employer.create);
    app.get("/api/employer*", employer.retrieve);
}