import { UserService } from '../../services/UserService'

export class DeleteUserProfileUseCase {
  constructor(private userService: UserService) {}

  async execute(userId: string): Promise<void> {
    return this.userService.deleteUser(userId)
  }
}
