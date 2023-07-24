import { RootState } from '@/app/store.ts'

export const selectGetPostsData = (state: RootState) => state.posts.posts
