import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { Monte} from './routes/montealban.jsx'
import { Hierve } from './routes/hierveElAgua.jsx'
import { IA } from './routes/IA.jsx'
import { IAres } from './routes/IAres.jsx'
import { Index } from './routes/index.jsx'
import { Login }  from './routes/Login.jsx'
import { Register } from './routes/Register.jsx'
import './index.css'
import { ErrorPage } from './paginas/ErrorPage.jsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const root=ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Index></Index>,
      },
      {
        path:'/HierveElAgua',
        element:<Hierve></Hierve>,
      },
      {
        path:'/IA',
        element:<IA></IA>,
      },
      {
        path:'/IA/res',
        element:<IAres></IAres>,
      }
    ],
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);

root.render(

  <RouterProvider router={router} />

)