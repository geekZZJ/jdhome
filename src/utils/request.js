import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://zhangblog.cn:7001',
  timeout: 10000
})

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}

const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(res => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}

export { post, get }
