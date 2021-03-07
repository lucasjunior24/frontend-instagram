import axios from 'axios'

const api = axios.create({
    baseURL: 'https://instagram-clone-mongobd.herokuapp.com'
})

export default api