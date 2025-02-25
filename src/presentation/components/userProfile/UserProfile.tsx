import React, { FC } from 'react'

import { UserEntity } from '../../../domain/entities/User'

interface IUserProfileProps {
  user: UserEntity
  editMode: boolean
  formData: Partial<UserEntity>
  setEditMode: (edit: boolean) => void
  setFormData: (data: Partial<UserEntity>) => void
  handleSubmit: (event: React.FormEvent) => void
}

export const UserProfile: FC<IUserProfileProps> = ({
  user,
  editMode,
  formData,
  setEditMode,
  setFormData,
  handleSubmit,
}) => {
  return (
    <div className="p-4">
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
              <input
                type="text"
                defaultValue={user.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
                className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
              <input
                type="email"
                defaultValue={user.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500">Role: {user.role}</p>
          <button
            onClick={() => setEditMode(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  )
}
