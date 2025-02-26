
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsProvider from './productscontext/ProductsProvider';
import App from './App.jsx';
import Home from './pages/home/Home';
import ShoppingCart from './pages/shoppingcart/ShoppingCart';

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
        path: 'cart',
        element: <ShoppingCart />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <RouterProvider router={router} />
  </ProductsProvider>
);
