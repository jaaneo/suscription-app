export type User = {
  id: string
  email: string
  password: string
  firstName: string
  lastname: string
}

export type LoginPayload = {
  password: string
} & Pick<User, 'email'>

export type RegisterPayload = {
  password: string
} & Omit<User, 'id'>
