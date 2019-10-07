import { create } from 'axios'
import Auth from './auth'
import environments from './environments'

const api = () => {

    const _api = create({
        baseURL: environments.baseURL
    })
    
    _api.interceptors.request.use(async config => {
        const token = Auth.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    })

    return _api
}

export default api()