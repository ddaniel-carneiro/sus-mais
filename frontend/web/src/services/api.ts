import axios from "axios";

const BaseURL = 'http://localhost:3000/api'

const api = axios.create({
  baseURL: BaseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
