const express = require("express");
const app = express();
app.use(express.json());
const budgetRoutes = require("./routes/budget.route");
const userRoutes = require("./routes/user.route");
const cors = require("cors");
require("dotenv").config();
// enable cors
app.use(cors());
app.options("*", cors());

// setup the express server router
app.use("/user", userRoutes);
app.use("/budget", budgetRoutes);

// TODO fix the env
// app.listen(process.env.PORT);
// console.log(`Listening on port:${process.env.PORT}`);
// console.log(`USER : ${process.env.USER}`);

console.log(`Listening on port:8005`);
app.listen(8005);
