import { configureStore } from '@reduxjs/toolkit'
import { TeamnameSlice } from './slice'

export default configureStore({
  reducer: {
    TeamTitle:TeamnameSlice
  },
})