const express = require("express");
const userRouter = require("./routes/user");
const companyRouter = require("./routes/company");
const productRouter = require("./routes/product");
const inventoryRouter = require("./routes/inventory");
const loginRouter = require("./routes/login");
const database = require("./controllers/database");

// Get .env data and declare additional constants
require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;
const app = express();

// Connect to database
database.connect(function (err) {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }

    console.log('Connected to database as id ' + database.threadId);
});

// Initialize server in port
app.listen(port, () => {
    console.log('Server listening on port: ', port);
});

app.get('/', (req, res) => {
    res.send('Server on');
})

app.use(express.json());

// Load server routes
app.use("/user", userRouter);
app.use("/company", companyRouter);
app.use("/product", productRouter);
app.use("/inventory", inventoryRouter);
app.use("/login", loginRouter);
