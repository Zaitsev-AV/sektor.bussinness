import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { createAppAsyncThunk } from '@/common/utils'
import { thunkTryCatch } from '@/common/utils/thunkTryCatch.ts'
import { Sort } from '@/components/ui/table'
import { postsApi } from '@/services/posts/posts-api.ts'
import { PostsType } from '@/services/posts/types.ts'

type InitialStateType = {
  posts: PostsType
  sort: Sort
}

const initialState: InitialStateType = {
  posts: [
    {
      userId: 0,
      id: 0,
      body: '',
      title: '',
    },
  ],
  sort: null,
}

export const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSortParams: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload
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
    const res = await postsApi.getPosts().then(res => res.data)

    console.log(res)

    return res
  })
})

export const postsThunks = { getPosts }
export const postsReducer = slice.reducer
export const postsActions = slice.actions
