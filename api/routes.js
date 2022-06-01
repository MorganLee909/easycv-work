const home = require(`${__dirname}/controllers/home.js`);

module.exports = (app)=>{
    app.get("/api", (req, res)=>{return res.sendFile(`${__dirname}/api.html`)});

    //ACCOUNT CREATION
    app.post("/api/user", home.createUser);
}