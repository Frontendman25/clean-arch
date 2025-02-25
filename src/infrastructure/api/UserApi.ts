import { httpClient } from './httpClient'
import { UserEntity } from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/UserRepository'

export class UserApiRepository implements UserRepository {
  async getUser(id: string): Promise<UserEntity> {
    const response = await httpClient.get(`/users/${id}`)
    return response.data
  }

  async getUsers(): Promise<UserEntity[]> {
    const response = await httpClient.get('/users')
    return response.data
  }

  async updateUserProfile(user: UserEntity): Promise<UserEntity> {
    const response = await httpClient.put(`/users/${user.id}`, user)
    return response.data
  }

  async getCurrentUser(): Promise<UserEntity> {
    const response = await httpClient.get('/users/current') // Adjust the endpoint as necessary
    return response.data
  }

  async searchUsers(query: string): Promise<UserEntity[]> {
    const response = await httpClient.get(`/users/search?query=${query}`) // Adjust the endpoint as necessary
    return response.data
  }

  async deleteUser(id: string): Promise<void> {
    await httpClient.delete(`/users/${id}`)
  }
}
