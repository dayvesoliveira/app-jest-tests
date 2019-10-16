import { create } from 'axios'
import Auth from './auth'
import environments from './environments'

const apiAxios = (() => {

    const api = create({
        baseURL: environments.baseURL
    })
    
    if (api) {
        api.interceptors.request.use(async config => {
            const token = Auth.getToken();
            if (token) {
            config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })
    }

    return api
})()

export default apiAxios