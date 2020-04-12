require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

//my routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

//MongoDb connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Database Conected !!`);
  })
  .catch("Db Erros");

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Running post
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("Hello World");
});
//my routes
app.use("/api", authRoute);
app.use("/api", userRoute);

app.listen(port, () => console.log(`App is running at port ${port}`));
