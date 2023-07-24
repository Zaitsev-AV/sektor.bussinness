import { createSlice } from '@reduxjs/toolkit'

import { createAppAsyncThunk } from '@/common/utils'
import { thunkTryCatch } from '@/common/utils/thunkTryCatch.ts'
import { postsApi } from '@/services/posts/posts-api.ts'
import { PostsType } from '@/services/posts/types.ts'

type InitialStateType = {
  posts: PostsType
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
}

export const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // setQueryParams: (state, action: PayloadAction<QueryCardsParams>) => {
    //   state.queryParams = { ...state.queryParams, ...action.payload }
    // },
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
