const { PS_ENV = 'prod', MOCK = '' } = process
	? process.env
	: {}

const PRESETS = { PS_ENV, MOCK }

const environments = {
    MOCK: MOCK,
    PS_ENV: PS_ENV,
    test: {
        baseURL: "http://localhost:3001/api/v1"
    },
    prod: {
        baseURL: "https://jsonplaceholder.typicode.com"
    }
}

const baseURL = PRESETS.MOCK === 'true'
                ? environments.test.baseURL
                : environments.prod.baseURL

environments.baseURL = baseURL

export default environments