import axios from 'axios'

const baseUrl = 'backend'

const getAll = () => {
    return axios
            .get(baseUrl)
            .then(response => response.data)
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
            .post(`${baseUrl}/`,newObject)
            .then(response => response.data)
            .catch(erorr => console.log(erorr))
            .finally(() => console.log('create request'))
}
const deleteById = (id) => {
    return axios
            .delete(`${baseUrl}/${id}`)
            .catch(error => console.log(error))
            .finally(() => console.log('delete request'))
}

export default {getAll, update, create, deleteById}