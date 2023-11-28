import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gutendex.com/books/',

})

export default api