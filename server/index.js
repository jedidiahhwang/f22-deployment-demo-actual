const express = require("express");
const path = require("path");

const app = express();

// Let's build the path to our front end files so Heroku can access them.

// Endpoints
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
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