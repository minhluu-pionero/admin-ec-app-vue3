export type LoginResponse = {
  token: string
}

export type UserType = {
  email: string
  name: string
}

export type AuthStateType = {
  token: string | null
  user?: UserType
  tokenExpiry: string | null
  isTokenExpired: boolean
}
