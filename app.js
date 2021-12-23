require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const connectDB = require("./db/DataBase");
const passport = require("passport");
const { localStrategy, JWTStrategy } = require("./middleware/passport");

// Imports Route
const userRoutes = require("./apis/users/routes");

//------------------------------------------------------------------

const app = express();
connectDB();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// passport;
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(JWTStrategy);

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.port || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
