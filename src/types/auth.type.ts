export type LoginResponse = {
  token: string
}

export type UserType = {
  email: string
  name: string
}

export interface AuthState {
  token: string | null
  user: UserType | null
  tokenExpiry: string | null
  isTokenExpired: boolean
}
