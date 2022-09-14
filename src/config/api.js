import axios from 'axios'

const { REACT_APP_BASE_URL } = process.env
const baseURL = "https://covid19.mathdro.id/api" // Temporário

const api = axios.create({
    // REACT_APP_BASE_URL
    baseURL
})

export const showData = async () => {
    return api.get('/countries/BR/confirmed').catch((err) => {
        console.log(err)
    })
}