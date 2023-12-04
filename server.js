const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
// env file
require("dotenv").config();
// routing
const indexRoutes = require("./routes/index.routes");
const { ValidationError } = require("express-validation");

const app = express();
// port
const port = process.env.PORT || 5000;
// mongoose connection
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.log(err);
});;

// bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api", indexRoutes);

// listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
