import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { createAppAsyncThunk } from '@/common/utils'
import { thunkTryCatch } from '@/common/utils/thunkTryCatch.ts'
import { Sort } from '@/components/ui/table'
import { postsApi } from '@/services/posts/posts-api.ts'
import { PostsType } from '@/services/posts/types.ts'

type PostsInitialStateType = {
  posts: PostsType
  sort: Sort
  searchQuery: string
}

const initialState: PostsInitialStateType = {
  posts: [
    {
      userId: 0,
      id: 0,
      body: '',
      title: '',
    },
  ],
  sort: null,
  searchQuery: '',
}

export const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSortParams: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload
    })
  },
})

const getPosts = createAppAsyncThunk<PostsType, void>('table/getTable', (_, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    return await postsApi.getPosts().then(res => res.data)
  })
})

export const postsThunks = { getPosts }
export const postsReducer = slice.reducer
export const postsActions = slice.actions
