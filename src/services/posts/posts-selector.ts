import { RootState } from '@/app/store.ts'

export const selectGetPostsData = (state: RootState) => state.posts.posts
export const selectGetSortData = (state: RootState) => state.posts.sort
export const selectSearchQuery = (state: RootState) => state.posts.searchQuery
