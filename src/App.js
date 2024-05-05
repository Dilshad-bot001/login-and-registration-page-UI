import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './components/Login'
import Registration from './components/Registration'
import Home from './components/Home'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <section className='min-h-screen min-w-full flex justify-center items-center bg-[#FFE6C9]'>
        <RouterProvider router={router} />
    </section>
  )
}

export default App