const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("connected to mongodb!!!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  console.log(req);
  res.send("server is running");
});

app.use("/server/auth", authRoute);
app.use("/server/post", postRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
