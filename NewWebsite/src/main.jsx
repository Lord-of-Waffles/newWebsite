import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Background from './components/Background';
import ContactInfo from './components/ContactInfo';
import Projects from './components/Projects';
import SatelliteComparison from './components/Projects/SatelliteComparison';
import ToDoList from './components/Projects/ToDoList';
import PersonalTrainer from './components/Projects/PersonalTrainer';
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
      },
      {
        path: "satellite",
        element: <SatelliteComparison />
      },
      {
        path: "todo",
        element: <ToDoList />
      },
      {
        path: "trainer",
        element: <PersonalTrainer />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);