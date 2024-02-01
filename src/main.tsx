import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home/index.tsx';
import ChefsDatabase from './pages/ChefsDatabase/index.tsx';
import UserRegistration from './pages/UserRegistration/index.tsx';

//With <a> use <Link key={} to={'/{endpoint}'} /> instead to route between the two pages
//key: 1 = <Home />, key: 2 = <ChefsDatabase />
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
