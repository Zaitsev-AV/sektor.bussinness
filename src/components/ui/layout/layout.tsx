import { FC } from 'react'

import { Navigate } from 'react-router-dom'

import { selectIsAppInitialized } from '@/app/app-selector.ts'
import { useAppSelector } from '@/app/hooks/useAppSelector.ts'

export const Layout: FC = () => {
  const isInitialized = useAppSelector(selectIsAppInitialized)

  return isInitialized ? <Navigate to="/posts" /> : <div>....loading</div>
}
