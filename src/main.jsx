
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsProvider from './productscontext/ProductsProvider';
import App from './App.jsx';
import Home from './pages/home/Home';
import ShoppingCart from './pages/shoppingcart/ShoppingCart';

import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import PasswordReset from './pages/passwordreset/PasswordReset';
import CheckEmail from './pages/passwordreset/CheckEmail';
import SetNewPassword from './pages/passwordreset/SetNewPassword';
import ResetSuccessfully from './pages/passwordreset/ResetSuccessfully';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'cart',
        element: <ShoppingCart />
      },
      // 
      {
        path: 'signin',
        element: <Signin />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'passwordreset',
        element: <PasswordReset />
      },
      {
        path: 'checkemail',
        element: <CheckEmail />
      },
      {
        path: 'setnewpassword',
        element: <SetNewPassword />
      },
      {
        path: 'resetsuccessfully',
        element: <ResetSuccessfully />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <RouterProvider router={router} />
  </ProductsProvider>
);
