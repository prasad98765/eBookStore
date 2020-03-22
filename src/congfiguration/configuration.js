const axios = require('axios').default;

export function searchBook(obj) {
    return axios({
        method: 'get',
        url: 'http://localhost:3000/searchBook',
        data: obj
    })
}