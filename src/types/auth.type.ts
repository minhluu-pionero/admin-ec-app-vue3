export type LoginResponse = {
  token: string
}

export type UserType = {
  email: string
  name: string
}

export type AuthStateType = {
  user?: UserType
}
