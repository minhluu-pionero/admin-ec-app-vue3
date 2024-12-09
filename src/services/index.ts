import Cookies from 'js-cookie'

export enum ApiPath {
  login = '/login',
  me = '/me',
}

const client = (url: ApiPath) => {
  const accessToken = Cookies.get('token')
  const apiGuest = new Set([ApiPath.login])

  if (accessToken || apiGuest.has(url)) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(handleResponse(url))
      }, 1500),
    )
  }

  return new Promise((_, reject) =>
    setTimeout(() => {
      reject(new Error('Unauthorized'))
    }, 1500),
  )
}

const handleResponse = (url: ApiPath) => {
  switch (url) {
    case ApiPath.me:
      return {
        email: 'test@example.com',
        name: 'Test User',
      }
    default:
      return null
  }
}

export default client
