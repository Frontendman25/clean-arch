import { UserEntity } from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/UserRepository'

export class MockUserRepository implements UserRepository {
  private mockUsers: UserEntity[] = [
    {
      id: '123',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
    },
    {
      id: '456',
      name: 'Jackie Chan',
      email: 'jackiechan@example.com',
      role: 'admin',
    },
    {
      id: '789',
      name: 'Hruce Lee',
      email: 'brucelee@example.com',
      role: 'user',
    },
  ]

  async getUser(id: string): Promise<UserEntity> {
    const user = this.mockUsers.find((u) => u.id === id)
    if (!user) throw new Error('User not found')

    return user
  }

  async getUsers(): Promise<UserEntity[]> {
    return this.mockUsers
  }

  async updateUserProfile(updatedUser: UserEntity): Promise<UserEntity> {
    this.mockUsers = this.mockUsers.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    )

    return updatedUser
  }

  async getCurrentUser(): Promise<UserEntity> {
    const user = this.mockUsers.find((u) => u.id === '123')
    if (!user) throw new Error('User not found')

    return user
  }

  async searchUsers(query: string): Promise<UserEntity[]> {
    return this.mockUsers.filter((u) => u.name.includes(query))
  }

  async deleteUser(id: string): Promise<void> {
    this.mockUsers = this.mockUsers.filter((u) => u.id !== id)
  }
}
