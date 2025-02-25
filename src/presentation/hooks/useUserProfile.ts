import { useState, useEffect, useCallback } from 'react'

import { UserEntity } from '../../domain/entities/User'
import { UpdateUserProfileUseCase } from '../../application/useCases/userProfileUseCases/UpdateUserProfileUseCase'
// import { UserApiRepository } from '../../infrastructure/api/UserApi'
import { MockUserRepository } from '../../infrastructure/api/MockUserRepository'

import { sleep } from 'shared/utils'

export const useUserProfie = (userId: string) => {
  const [user, setUser] = useState<UserEntity | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const userRepository = new MockUserRepository()
  const updateUserProfile = new UpdateUserProfileUseCase(userRepository)

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true)
      await sleep(1000)
      const userData = await userRepository.getUser(userId)
      setUser(userData)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  const updateProfile = useCallback(async (updatedUser: UserEntity) => {
    try {
      setLoading(true)
      await sleep(1000)
      const updated = await updateUserProfile.execute(updatedUser)
      setUser(updated)
      return updated
    } catch (err) {
      setError(err as Error)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return { user, loading, error, fetchUser, updateProfile }
}
