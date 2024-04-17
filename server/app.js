require("dotenv").config();
const express = require("express");
const budgetRoutes = require("./routes/budget.route");
const userRoutes = require("./routes/user.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

app.use(cookieParser());
// configure cors
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  credentials: true,
};

// enable cors
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// setup the express server router
app.use("/user", userRoutes);
app.use("/budget", budgetRoutes);

console.log(`Listening on port: 8005`);
app.listen(8005);
