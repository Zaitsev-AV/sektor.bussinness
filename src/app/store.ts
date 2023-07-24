import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from '@/app/app-slice.ts'
import { postsReducer } from '@/services/posts/posts-slice.ts'

export const store = configureStore({
  reducer: {
    app: appReducer,
    posts: postsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
