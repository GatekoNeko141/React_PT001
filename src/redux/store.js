import { configureStore } from '@reduxjs/toolkit'
import globalsReducer from './globals'

export default configureStore({
  reducer: {
    globals: globalsReducer
  },
})