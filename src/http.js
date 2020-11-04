import axios from 'axios'

const http = axios.create({
  baseURL: 'https://autumnfish.cn'
})

export default http