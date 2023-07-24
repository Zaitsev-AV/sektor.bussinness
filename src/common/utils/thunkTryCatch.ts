import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'

import { AppDispatch, RootState } from '@/app/store.ts'

/**Функция thunkTryCatch возвращает результат выполнения logic.
 *@param thunkAPI
 *@param logic - это функция, которую мы хотим выполнить с помощью try-catch.
 Если во время выполнения logic произошла ошибка, мы обрабатываем ее в блоке catch.
 Затем мы заканчиваем выполнение thunkTryCatch*/

export const thunkTryCatch = async (
  thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, null>,
  logic: Function
) => {
  const { rejectWithValue } = thunkAPI

  try {
    return await logic()
  } catch (e) {
    return rejectWithValue(null)
  }
}
