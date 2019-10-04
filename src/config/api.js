import axios from 'axios'
import Auth from './auth'

export const envirioments = {
    END_POINT: "https://reqres.in/",
}

const api = axios.create({
    baseURL: envirioments.END_POINT
})

api.interceptors.request.use(async config => {
    const token = Auth.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})

export default api