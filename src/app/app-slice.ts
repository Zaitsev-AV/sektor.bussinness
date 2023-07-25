import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'app',
  initialState: {
    isAppInitialized: false,
  },
  reducers: {
    setInitialization: (state, action: PayloadAction<{ isAppInitialized: boolean }>) => {
      state.isAppInitialized = action.payload.isAppInitialized
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addMatcher(
  //       action => {
  //         return action.type.endsWith('/pending')
  //       },
  //       state => {
  //         state.isLoading = true
  //       }
  //     )
  //     .addMatcher(
  //       action => {
  //         return action.type.endsWith('/rejected')
  //       },
  //       (state, action) => {
  //         errorAppHandler(state, action)
  //         state.isLoading = false
  //       }
  //     )
  //     .addMatcher(
  //       action => {
  //         return action.type.endsWith('/fulfilled')
  //       },
  //       state => {
  //         state.isLoading = false
  //       }
  //     )
  // },
})

// const errorAppHandler = (
//   state: { error: string | null; isLoading: boolean; isAppInitialized: boolean },
//   action: AnyAction
// ) => {
//   const err = action.payload as Error | AxiosError<{ error: string }>
//
//   if (isAxiosError(err)) {
//     state.error = err.response ? err.response.data.error : err.message
//   } else {
//     state.error = err && err.message ? `Native error ${err.message}` : 'Unknown error'
//   }
// }

export const appReducer = slice.reducer
export const appActions = slice.actions
