import { instance } from '@/common/api/common-api.ts'
import { PostsType } from '@/services/posts/types.ts'

export const postsApi = {
  getPosts: () => {
    return instance.get<PostsType>('posts')
  },
}
