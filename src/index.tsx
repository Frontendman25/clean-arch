import React from 'react'
import ReactDOM from 'react-dom/client'

import { StoreProvider } from 'presentation/store/StoreProvider'

import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
)
