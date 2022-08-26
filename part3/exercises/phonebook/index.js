const express = require("express");
const util = require("./controllers/util.js");
const middleware = require("./middlewares");
const app = express();

/*
 * this snippet should be inserted into ./node_modules/morgan/index.js
 * ----
 * morgan.token('payload', function getResponseHeader (req, res) {
 *
 * if(!(req.method.toLowerCase() === 'post')) return undefined;
 *
 * return JSON.stringify(req.body);
 * })
 * ---
 */

app.use(express.json());
app.use(
  require("morgan")(
    ":method :url :status :res[content-length] - :response-time ms :payload"
  )
);

app.get("/api/persons", (_a, res) => {
  res.send(util.getAllPersons());
});

app.get("/info", (_, res) => {
  res.send(util.infoHandler());
});

app.get("/api/person/:id", (req, res) => {
  const id = parseInt(req.params.id);
  id
    ? util.getPersonByIdHandler(id, res)
    : util.badRequestHandler(res, `Id should be a parseable number`);
});

app.post("/api/persons", (req, res) => {
  let new_person = util.addNewPerson(req.body);

  new_person
    ? res.send(new_person)
    : res.status(403).send({ error: "name must be unique" });
});

app.delete("/api/person/:id", (req, res) => {
  const id = parseInt(req.params.id);
  id
    ? res.send(util.deletePersonById(id))
    : res.status(404).send(`No people found to be deleted`);
});

app.use(middleware.unknownEndpoint);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
