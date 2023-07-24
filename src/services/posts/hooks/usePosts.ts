import { useAppDispatch } from '@/app/hooks/useAppDispatch.ts'
import { useAppSelector } from '@/app/hooks/useAppSelector.ts'
import { selectGetPostsData } from '@/services/posts/posts-selector.ts'
import { postsThunks } from '@/services/posts/posts-slice.ts'

export const usePosts = () => {
  const dispatch = useAppDispatch()
  const postData = useAppSelector(selectGetPostsData)
  const getPosts = () => {
    dispatch(postsThunks.getPosts())
  }

  return {
    getPosts,
    postData,
  }
}
