import { RootState } from '@/app/store.ts'

export const selectIsAppInitialized = (state: RootState) => state.app.isAppInitialized
