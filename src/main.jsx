import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './Components/NotFound.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import AuthProvider from './ContextProvider/AuthProvider.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Private from './Components/Private.jsx'

import './App.css';
import Dashboard from './Components/DashboardComponents/Dashboard.jsx'
import DashboardHome from './Components/DashboardComponents/DashboardHome.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Login',
        element: <Login />

      },
      {
        path: '/Register',
        element: <Register />
      },

    ]
  },
  {
    path: '/Dashboard',
    element: <Private><Dashboard /> </Private>,
    errorElement: <NotFound />,
    children: [

      {
        path: '/Dashboard/Home',
        element: <DashboardHome />
      }

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
