import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

test('renders User Profile', () => {
  render(<App />)
  const userProfileElement = screen.getByText(/User Profile/i)
  expect(userProfileElement).toBeInTheDocument()
})
