// src/presentation/store/StoreProvider.tsx

import React, {
  FC,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  createContext,
} from 'react'

import { UserEntity } from '../../domain/entities/User'

interface StoreState {
  user: UserEntity | null
}

interface StoreAction {
  type: 'SET_USER' | 'CLEAR_USER'
  payload?: UserEntity
}

const initialState: StoreState = {
  user: null,
}

const StoreContext = createContext<{
  state: StoreState
  dispatch: Dispatch<StoreAction>
}>({ state: initialState, dispatch: () => null })

const storeReducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload || null }
    case 'CLEAR_USER':
      return { ...state, user: null }
    default:
      return state
  }
}

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
