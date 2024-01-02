import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

import './App.css'

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: '/menu', element: <Menu />},
      {path: '/cart', element: <Cart />},
      {path: '/checkout', element: <Checkout />}
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
