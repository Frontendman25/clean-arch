export interface UserEntity {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
}

export const defaultUser: UserEntity = {
  id: '',
  name: '',
  email: '',
  role: 'user',
}
