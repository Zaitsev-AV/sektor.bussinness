import { useEffect } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from '@/components/ui/layout/layout.tsx'
import { PostsPage } from '@/pages/table-page/posts-page.tsx'
import { usePosts } from '@/services/posts/hooks/usePosts.ts'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
  {
    path: '/posts/:page',
    element: <PostsPage />,
  },
])

export const App = () => {
  const { getPosts } = usePosts()

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap' }}>
      <RouterProvider router={routes} />
    </div>
  )
}
