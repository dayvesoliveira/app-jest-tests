import { create } from 'axios'
import Auth from './auth'
import environments from './environments'

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

export { api as Api }

export default api