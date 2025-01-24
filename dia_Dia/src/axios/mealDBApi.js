import axios from "axios";

const baseURL = 'https://www.themealdb.com/api/json/v1/1'

const fetchApi = axios.create(
    {
        baseURL,
        headers: {
            "Content-Type": "application/json"
        }
    }
)

export default fetchApi

