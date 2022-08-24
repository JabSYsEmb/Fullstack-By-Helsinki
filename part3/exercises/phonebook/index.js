const express = require("express");
const util    = require('./controllers/util.js');
const app 		= express();

app.use(express.json());

app.get("/api/persons" , (_, res) => {
	res.send(data);
})

app.get("/info", (_, res) => {
	res.send(util.infoHandler());
});

app.get("/api/person/:id", (req, res) => {
	const id = parseInt(req.params.id);
	id && util.getPersonByIdHandler(id, res);
	util.badRequestHandler(res,`Id should be a parseable number`);
})

app.delete("/api/person/:id", (req, res) => {
	const id = parseInt(req.params.id);
	id && res.send(util.deletePersonById(id));
	res.status(404).send(`No people found to be deleted`);
})

app.listen(3000 , () => {
	console.log("Server is listening on port 3000");
});
