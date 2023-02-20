const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blog");

const requestLogger = require("./utils/logger.js");
const errorHandler  = require("./utils/errorHandler.js");
const config = require("./utils/config");

mongoose.connect(config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("/", (_req, res) => res.send("<h1>Hello world!</h1>"));
app.use("/api/blogs", blogsRouter);

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
