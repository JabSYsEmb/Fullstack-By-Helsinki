import axios from 'axios'

const baseUrl = `http://localhost:3002/notes`

const getAll = () => {
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
      }
    return axios.get(baseUrl).then(response => response.data.concat(nonExisting))
}

const update = (id, changedNote) =>  {
    return axios.put(`${baseUrl}/${id}`,changedNote).then(response => response.data)
}

const create = (newObject) => {
    return axios.post(baseUrl,newObject)
}

export default {getAll, update, create}