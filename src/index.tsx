import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx'
import './index.css'

// Pages
// import {
//   Root,
// } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/documentation",
  //   element: <Docs />,
  // },
  // {
  //   path: "/auth",
  //   element: <Auth />,
  // }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
