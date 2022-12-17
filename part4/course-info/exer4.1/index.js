const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./utils/config");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blog");

mongoose.connect(config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use("/api/blog", blogsRouter);
app.use("/", (req, res) => res.send("<h1>Hello world!</h1>"));

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
