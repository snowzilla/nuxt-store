import axios, {type CreateAxiosDefaults} from 'axios'


const options: CreateAxiosDefaults = {
  baseURL: 'https://api.escuelajs.co/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  }
}

const {startLoading, endLoading} = useLoading()

const axiosClassic = axios.create(options)

axiosClassic.interceptors.request.use(config => {
  // const accessToken = getAccessToken()
  //
  // if (config?.headers && accessToken) {
  //   config.headers.Authorization = `Bearer ${accessToken}`
  // }

  startLoading()
  return config
})

axiosClassic.interceptors.response.use(
  config => {
    endLoading()
    return config
  },
  async error => {
    endLoading()
    return error
  }
)

export { axiosClassic }
