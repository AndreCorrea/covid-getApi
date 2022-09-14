import axios from 'axios'

const { REACT_APP_BASE_URL } = process.env

const api = axios.create({
    REACT_APP_BASE_URL
})

export const showData = async () => {
    return api.get('/countries/BR/confirmed').catch((err) => {
        console.log(err)
    })
}