import { UserEntity } from '../../../domain/entities/User'
import { UserRepository } from 'domain/repositories/UserRepository'

export class UpdateUserProfileUseCase {
  constructor(private userService: UserRepository) {}

  async execute(user: UserEntity): Promise<UserEntity> {
    if (!user.name || user.name.trim() === '') {
      throw new Error('User name cannot be empty')
    }

    if (!user.email.includes('@')) {
      throw new Error('Invalid email format')
    }

    return this.userService.updateUserProfile(user)
  }
}
