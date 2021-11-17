import axios from 'axios'

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'http://zhangblog.cn:7001',
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

export { post }
