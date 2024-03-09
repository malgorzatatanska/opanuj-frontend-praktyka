import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { ArticlesScreen } from './screens/ArticlesScreen'
import { AuthorsScreen } from './screens/AuthorsScreen'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/articles',
    element: <ArticlesScreen />,
  },
  {
    path: '/authors',
    element: <AuthorsScreen />,
  },
])
