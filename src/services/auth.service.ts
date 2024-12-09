import type { LoginResponse, UserType } from '@/types/auth.type'
import api, { ApiPath } from '.'

export const loginApi = (email: string, password: string): Promise<LoginResponse> => {
  return api(ApiPath.login).then(() => {
    if (email === 'test@example.com' && password === 'password') {
      return {
        token: 'test_token',
      }
    } else {
      throw new Error('Unauthorized')
    }
  })
}

export const getMeApi = (): Promise<UserType> => {
  return api(ApiPath.me).then((response) => response as UserType)
}
