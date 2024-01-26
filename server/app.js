/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const cluster = require("node:cluster");
const os = require("node:os");
const numCPUs = os.availableParallelism();
const process = require("node:process");
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const PORT = process.env.PORT || 3000;

// import routers
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router mappings
app.use("/", indexRouter);
app.use("/user", userRouter);

// establish mongo database connection
db.mongoose.connect(db.url).catch((err) => {
  console.log("Error connecting to the database:", err);
  process.exit();
});

// creates child processes
if (cluster.isPrimary) {
  // fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
}

module.exports = app;
