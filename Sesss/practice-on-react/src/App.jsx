import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Saludo from './Pages/Saludo';
import ErrorPage from './Pages/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <h1>Hola</h1>,
          errorElement: <ErrorPage />,
        },
        {
          path: '/saludo',
          element: <Saludo />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
