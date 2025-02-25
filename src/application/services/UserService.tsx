import { UserEntity } from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/UserRepository'

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async updateUserProfile(user: UserEntity): Promise<UserEntity> {
    if (!user.name || user.name.trim() === '') {
      throw new Error('User name cannot be empty')
    }
    if (!user.email.includes('@')) {
      throw new Error('Invalid email format')
    }

    return await this.userRepository.updateUserProfile(user)
  }

  async getUserById(id: string): Promise<UserEntity> {
    return await this.userRepository.getUser(id)
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.deleteUser(id)
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.getUsers()
  }
}
