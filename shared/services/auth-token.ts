import Cookies from 'js-cookie'

export const getAccessToken = () => {
  const accessToken = Cookies.get('accessToken')
  return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set('accessToken', accessToken)
}

export const removeFromStorage = () => {
  Cookies.remove('accessToken')
}
