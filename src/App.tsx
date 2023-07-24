import { useEffect } from 'react'

import { Layout } from '@/components/ui/layout/layout.tsx'
import { usePosts } from '@/services/posts/hooks/usePosts.ts'

export const App = () => {
  const { getPosts } = usePosts()

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <Layout />
    </div>
  )
}
