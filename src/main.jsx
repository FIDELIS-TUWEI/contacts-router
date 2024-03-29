import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
   createBrowserRouter, 
   RouterProvider
 } from 'react-router-dom'
import Root, { 
  loader as rootLoader,
  action as rootAction 
} from './routes/Root'
import Error from './Error'
import Contact, { loader as contactLoader } from './routes/Contact'
import EditContact, { action as editAction } from './routes/Edit'

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
