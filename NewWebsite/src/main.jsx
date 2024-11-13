import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Background from './components/Background';
import ContactInfo from './components/ContactInfo';
import Projects from './components/Projects';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: "background",
        element: <Background />,
      },
      {
        path: "contact",
        element: <ContactInfo />,
      },
      {
        path: "projects",
        element: <Projects />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);