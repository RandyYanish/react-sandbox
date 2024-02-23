import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Docs from './pages/Docs.tsx';

import './index.css';

// Pages
// import {
//   Root,
// } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "documentation",
    element: <Docs />,
  },
  // {
  //   path: "/auth",
  //   element: <Auth />,
  // }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: window.location.origin }}> */}
      <RouterProvider router={router} />
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
