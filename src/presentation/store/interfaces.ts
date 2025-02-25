import { UserEntity } from 'domain/entities/User'

export interface StoreState {
  user: UserEntity | null
}

export interface StoreAction {
  type: 'SET_USER' | 'CLEAR_USER'
  payload?: UserEntity
}
