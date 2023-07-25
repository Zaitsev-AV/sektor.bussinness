import { useAppDispatch } from '@/app/hooks/useAppDispatch.ts'
import { useAppSelector } from '@/app/hooks/useAppSelector.ts'
import { Sort } from '@/components/ui/table'
import { selectGetPostsData, selectGetSortData } from '@/services/posts/posts-selector.ts'
import { postsActions, postsThunks } from '@/services/posts/posts-slice.ts'
import { PostsType } from '@/services/posts/types.ts'

export const usePosts = () => {
  const dispatch = useAppDispatch()
  const postData = useAppSelector(selectGetPostsData)
  const sortData = useAppSelector(selectGetSortData)

  const setSortData = (data: Sort) => {
    dispatch(postsActions.setSortParams(data))
  }

  const getPosts = () => {
    dispatch(postsThunks.getPosts())
  }

  const sortable = (data: PostsType, sort: Sort) => {
    if (!sort) return data
    const { columnKey, direction } = sort

    return [...data].sort((a, b) => {
      if (direction === 'asc') {
        return a[columnKey] > b[columnKey] ? 1 : -1
      } else {
        return a[columnKey] < b[columnKey] ? 1 : -1
      }
    })
  }
  const sortingData = sortable(postData, sortData)

  return {
    getPosts,
    postData,
    setSortData,
    sortData,
    sortingData,
  }
}
