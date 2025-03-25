
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// context providers
import ProductsProvider from './productscontext/ProductsProvider';
import UsersProvider from './userscontext/UsersProvider.jsx';
// pages
import App from './App.jsx';
import Home from './pages/home/Home';
import ShoppingCart from './pages/shoppingcart/ShoppingCart';
import CheckOut from './pages/checkout/CheckOut.jsx';
// ---
// account page
import Account from './pages/account/Account';
// auth pages
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import PasswordReset from './pages/passwordreset/PasswordReset';
import CheckEmail from './pages/passwordreset/CheckEmail';
import SetNewPassword from './pages/passwordreset/SetNewPassword';
import ResetSuccessfully from './pages/passwordreset/ResetSuccessfully';

// test page
import Test from './pages/test/Test';

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
      {
        path: 'checkout',
        element: <CheckOut />
      },
      // -----
      {
        path: 'account',
        element: <Account />
      },
      // -----
      {
        path: 'signin',
        element: <UsersProvider>
          <Signin />
        </UsersProvider>
      },
      {
        path: 'signup',
        element: <UsersProvider>
        <Signup />
      </UsersProvider>
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
      },
      // test for supabase
      {
        path: 'test',
        element: <Test /> 
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <RouterProvider router={router} />
  </ProductsProvider>
);
