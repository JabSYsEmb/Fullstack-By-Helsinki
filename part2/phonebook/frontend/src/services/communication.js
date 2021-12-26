import axios from 'axios'
const urlBase = 'http://127.0.0.1:3002/persons'

const getAll = () => {
    return axios.get(urlBase)
                .then(response => response.data)
                .catch(() => console.log('Server probably is done, data was fetched.'))
                .finally(() => console.log('getAll() function'))
}

const update = (id,newObj) => {
    return axios.put(`${urlBase}/${id}`,newObj)
                .then(response => response.data)
                .catch(() => console.log(`${id} ID wasn't able to be updated, try again!`))
                .finally(() => console.log('update() function'))
}

const create = (newObj) => {
    return axios.post(urlBase,newObj)
                .then(response => response.data)
                .catch(() => console.log('Person was not able to be sent to server.'))
                .finally(() => console.log('create() function'))
}

export default {
    getAll : getAll,
    create : create,
    update : update
}