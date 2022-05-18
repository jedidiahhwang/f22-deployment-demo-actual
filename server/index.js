const express = require("express");
const path = require("path");

const app = express();

// Let's build the path to our front end files so Heroku can access them.
// Middleware
// You can server entire folders using middleware.
app.use("/", express.static(path.join(__dirname, "../client")));


// Endpoints
// You can ONLY serve specific files using endpoints.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

app.get("/styles", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.css"))
})

app.get("/js", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/main.js"))
})

/*
    When Heroku deploys our app, it will provide its own port number. 
    This port number is stored on process.env.PORT.

    IF we are not deploying on Heroku (working on our local machine),
    it will then default to port 4005 (just picked 4005 arbitrarily).
*/
const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})