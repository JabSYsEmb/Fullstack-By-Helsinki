const express = require("express");
const data = require("./src/data.json");

const app = express();

app.use(express.json());
app.use(require("cors")({}));

app.get("/api/notes", (req, res) => {
  res.send(data);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT => {console.log(`The server is listening on the ${PORT}`)});
