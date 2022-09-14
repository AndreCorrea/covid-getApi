import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

const api = axios.create({
    baseURL
})

export const showData = async () => {
    return api.get('countries/BR/confirmed').catch((err) => {
        console.log(err)
    })
}