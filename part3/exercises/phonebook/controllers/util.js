const data = require("../data.json");

const getAllPersons = () => {
  return data;
};

const getPersonByIdHandler = (id, res) => {
  const person = getPersonById(id);
  person ? res.send(person) : errorHandler(id, res);
};

const getPersonById = (id) => {
  return data.find((person) => person.id === id);
};

const errorHandler = (id, res) => {
  res.status(404).send(`No data is found for ${id} id`);
};

const deletePersonById = (id) => {
  const idx = getPersonIdxFromData(id);
  if (idx >= 0) return data.splice(idx, 1);
};

const getPersonIdxFromData = (id) => {
  return data.findIndex((person) => person.id === id);
};

const addNewPerson = (payload) => {
  if (!(payload.name || payload.number)) {
    return undefined;
  }

  if (data.find((person) => person.name === payload.name)) {
    return undefined;
  }

  let new_person = { id: generateId(), ...payload };
  data.push(new_person);
  return new_person;
};

const generateId = () => {
  return Math.floor(Math.random() * 1000);
};

const badRequestHandler = (res, msg) => {
  res.status(400).send(msg);
};

const infoHandler = () =>
  `<div> \
			<h1>Phonebook has info for ${data.length} people</h1> \
			<p>${new Date().toString()}</p> \
	 </div>`;

module.exports = {
  addNewPerson,
  getAllPersons,
  getPersonByIdHandler,
  getPersonById,
  errorHandler,
  deletePersonById,
  getPersonIdxFromData,
  badRequestHandler,
  infoHandler,
};
