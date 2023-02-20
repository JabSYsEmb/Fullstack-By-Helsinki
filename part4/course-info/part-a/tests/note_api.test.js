const mongoose  = require('mongoose');
const supertest = require('supertest');
const helper    = require('../utils/test_helper');
const app       = require('../app');
const Note      = require('../models/note');
const api = supertest(app);

beforeEach(async () => {
  await Note.deleteMany({});

  let noteObject = new Note(helper.initialNotes[0]);
  await noteObject.save();

  noteObject = new Note(helper.initialNotes[1]);
  await noteObject.save();
});

describe('GET', () => {
  test('notes are returned as json', async () => {
    await api
      .get('/api/notes')
      .expect(200)
      .expect('content-type', /application\/json/);
  }, 1000);

  test('all notes are returned', async () => {
    const response = await api.get('/api/notes');
    expect(response.body).toHaveLength(helper.initialNotes.length);
  }, 1000);

  test('First note is the same as the first note pushed into DB', async () => {
    const response = await api.get('/api/notes');
    expect(response.body[0].content).toBe(helper.initialNotes[0].content);
  }, 1000);

  test('Get returns a specific note', async () => {
    const response = await api.get('/api/notes');
    const contents = response.body.map(r => r.content);
    expect(contents).toContain('Browser can execute only Javascript');
  }, 1000);
});

describe('POST', () => {

  test('a valid note can be added', async () => {
    const newNote = {
      content: 'async/await simplifies making async calls',
      important: false,
    };
    await api
      .post('/api/notes')
      .send(newNote)
      .expect(201)
      .expect('Content-Type', /application\/json/);
    const response = await api.get('/api/notes');
    const contents = response.body.map(r => r.content);
    expect(response.body).toHaveLength(helper.initialNotes.length + 1);
    expect(contents).toContain(
      'async/await simplifies making async calls'
    );
  });

  test('missing content note is not acceptable', async () => {
    const newNote = {
      important: false,
    };
    await api
      .post('/api/notes')
      .send(newNote)
      .expect(400);

    const notesAtEnd = await helper.notesInDb();
    expect(notesAtEnd).toHaveLength(helper.initialNotes.length);
  });

});

afterAll(() => {
  mongoose.connection.close();
});
