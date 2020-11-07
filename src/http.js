import axios from 'axios'

const http = axios.create({
  baseURL: 'https://autumnfish.cn'
})
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default http