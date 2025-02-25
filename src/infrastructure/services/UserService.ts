import { UserEntity } from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/UserRepository'

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUserById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.getUser(id)
    // Additional business logic can be added here
    return user
  }

  async updateUser(user: UserEntity): Promise<UserEntity> {
    // Additional validation or business rules can be applied here

    const updatedUser = await this.userRepository.updateUserProfile(user)

    return updatedUser
  }

  // Other user-related methods can be added here
}
