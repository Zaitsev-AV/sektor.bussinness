import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'

const slice = createSlice({
  name: 'app',
  initialState: {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
  },
  reducers: {
    setInitialization: (state, action: PayloadAction<{ isAppInitialized: boolean }>) => {
      state.isAppInitialized = action.payload.isAppInitialized
    },
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        action => {
          return action.type.endsWith('/pending')
        },
        state => {
          state.isLoading = true
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/rejected')
        },
        (state, action) => {
          errorAppHandler(state, action)
          state.isLoading = false
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/fulfilled')
        },
        state => {
          state.isLoading = false
        }
      )
  },
})

const errorAppHandler = (
  state: { error: string | null; isLoading: boolean; isAppInitialized: boolean },
  action: AnyAction
) => {
  const err = action.payload as Error | AxiosError<{ error: string }>

  if (isAxiosError(err)) {
    state.error = err.response ? err.response.data.error : err.message
  } else {
    state.error = err && err.message ? `Native error ${err.message}` : 'Unknown error'
  }
}

export const appReducer = slice.reducer
export const appActions = slice.actions
