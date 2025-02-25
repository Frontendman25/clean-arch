import React, { FC, useState, FormEvent } from 'react'
// import { useParams } from 'react-router-dom';

import { UserEntity } from 'domain/entities/User'
import { useUserProfie } from '../../hooks/useUserProfile'

import { Loader } from '../common/Loader'
import { UserProfile } from './UserProfile'

const UserProfileContainer: FC = () => {
  //   const { userId } = useParams<{ userId: string }>();
  const { user, loading, error, updateProfile } = useUserProfie('123')

  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState<Partial<UserEntity>>({})

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    try {
      await updateProfile({ ...user, ...formData })
      setEditMode(false)
    } catch (err) {
      console.error('Failed to update profile:', err)
    }
  }

  if (loading) return <Loader />
  if (error) return <div>Error: {error.message}</div>
  if (!user) return <div>No user found</div>

  return (
    <UserProfile
      user={user}
      editMode={editMode}
      setEditMode={setEditMode}
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  )
}

export default UserProfileContainer
