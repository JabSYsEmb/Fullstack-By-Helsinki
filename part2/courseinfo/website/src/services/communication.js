import axios from 'axios'

const baseUrl = `http://localhost:3002/notes`

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const update = (id, changedNote) =>  {
    return axios.put(`${baseUrl}/${id}`,changedNote).then(response => response.data)
}

const create = (newObject) => {
    return axios.post(baseUrl,newObject).then(response => response.data)
}

export default {
    getAll : getAll,
    update : update,
    create : create 
}