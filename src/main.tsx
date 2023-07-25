import '@fontsource/roboto/400.css'

import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './styles/index.scss'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from '@/app/store.ts'
import { App } from '@/App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
