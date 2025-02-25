import { UserEntity } from '../../../domain/entities/User'
import { UserService } from '../../services/UserService'

export class GetUserProfileUseCase {
  constructor(private userService: UserService) {}

  async execute(userId: string): Promise<UserEntity> {
    return this.userService.getUserById(userId)
  }
}
