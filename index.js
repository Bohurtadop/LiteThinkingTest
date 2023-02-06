const express = require("express");
const userRouter = require("./routes/user.js");
const database = require("./controllers/database.js");

// Get .env data
require('dotenv').config();

// Connect to database
database.connect(function (err) {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }

    console.log('Connected to database as id ' + database.threadId);
});

// Initialize server in port
const app = express();
const port = process.env.SERVER_PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server on');
})

app.listen(port, () => {
    console.log('Server listening on port: ', port);
});

app.use("/user", userRouter);