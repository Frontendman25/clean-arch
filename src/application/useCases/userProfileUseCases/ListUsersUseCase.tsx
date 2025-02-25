import { UserEntity } from '../../../domain/entities/User'
import { UserService } from '../../services/UserService'

export class ListUsersUseCase {
  constructor(private userService: UserService) {}

  async execute(): Promise<UserEntity[]> {
    return this.userService.getAllUsers()
  }
}
