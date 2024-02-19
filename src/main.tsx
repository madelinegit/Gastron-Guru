import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home/index.tsx';
import ChefsDatabase from './pages/ChefsDatabase/index.tsx';
import UserRegistration from './pages/UserRegistration/index.tsx';
import Rating from './pages/Rating';
import { Provider } from 'react-redux';
import store from './store/Conventional/store.ts';

//With <a> use <Link key={} to={'/{endpoint}'} /> instead to route between the two pages
//key: 1 = <Home />, key: 2 = <ChefsDatabase />
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'chefs-database',
        element: <ChefsDatabase />,
      },
      {
        path: 'user-registration',
        element: <UserRegistration />,
      },
      {
        path: 'rating',
        element: <Rating />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);