import axios from 'axios'

const baseUrl = `http://localhost:3002/notes`

const getAll = () => {
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
      }
    return axios
                .get(baseUrl)
                .then(response => response.data.concat(nonExisting))
                .catch(erorr => console.log(erorr))
                .finally(() => console.log('getAll request'))
}

const update = (id, changedNote) =>  {
    return axios
                .put(`${baseUrl}/${id}`,changedNote)
                .then(response => response.data)
                .catch(error => console.log(error))
                .finally(() => console.log('update request'))
}

const create = (newObject) => {
    return axios
            .post(baseUrl,newObject)
            .catch(erorr => console.log(erorr))
            .finally(() => console.log('create request'))
}

export default {getAll, update, create}