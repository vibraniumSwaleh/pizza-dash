import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      { path: '/order/new', element: <CreateOrder /> },
      { path: '/order/:orderId', element: <Order /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    />
  );
}

export default App;
