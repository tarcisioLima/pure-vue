import axios from 'axios'

export default function () {
    return axios.create({
        baseURL: 'https://pure-vue-tarcisiolima.c9users.io:8081/'
    })
}