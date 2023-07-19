const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { userCredentialRoute } = require("./routes/users/users.routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.use("/data", userCredentialRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Connected to DB`);
  } catch (error) {
    console.log("Error in connection with server");
  }

  console.log(`server is running at ${process.env.PORT}`);
});
