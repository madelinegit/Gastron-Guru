import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home/index.tsx'
import { Provider } from 'react-redux'
import store from './store/Conventional/store'
import ChefsDatabase from './pages/ChefsDatabase/index.tsx'
import Tester from './pages/ChefsDatabase/tester.tsx'

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
        //element: <Tester />, //change to <ChefsDatabase /> before push
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
