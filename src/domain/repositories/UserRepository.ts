import { UserEntity } from '../entities/User'

export interface UserRepository {
  getUser(id: string): Promise<UserEntity>
  getUsers(): Promise<UserEntity[]>
  updateUserProfile(user: UserEntity): Promise<UserEntity>
  getCurrentUser(): Promise<UserEntity>
  searchUsers(query: string): Promise<UserEntity[]>
  deleteUser(id: string): Promise<void>
}
