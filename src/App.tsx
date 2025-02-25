import React, { FC } from 'react'

import UserProfilePage from 'presentation/pages/UserProfilePage'

import './App.css'

const App: FC = () => {
  return (
    <div className="App">
      <h1 className="flex justify-center p-4 text-2xl font-bold mb-4">
        User Profile
      </h1>
      <div className="container mx-auto p-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
          <UserProfilePage />
        </div>
      </div>
    </div>
  )
}

export default App
