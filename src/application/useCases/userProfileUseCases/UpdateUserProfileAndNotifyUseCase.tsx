import { UserService } from '../../services/UserService'
import { NotificationService } from '../../services/NotificationService'
import { UserEntity } from '../../../domain/entities/User'

export class UpdateUserProfileAndNotifyUseCase {
  constructor(
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  async execute(user: UserEntity): Promise<UserEntity> {
    // Update the user profile
    const updatedUser = await this.userService.updateUserProfile(user)

    // Send a notification to the user
    this.notificationService.sendEmail(
      updatedUser.email,
      'Profile Updated',
      `Hello ${updatedUser.name}, your profile has been successfully updated.`
    )

    return updatedUser
  }
}
