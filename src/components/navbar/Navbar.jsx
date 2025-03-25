
import { useLocation } from 'react-router-dom';
import TopNav from "./topnav/TopNav";
import BottomNav from "./bottomnav/BottomNav";

function Navbar() {
  const { pathname } = useLocation();
  const hideBottomNavRoutes = ['/cart', '/checkout', '/account',
    '/account/wishlist', '/account/orders', '/account/returns',
    '/account/addresses', '/account/payment', '/account/profile',
    '/account/notification', '/account/settings',
  ];
  return (
    <section className={`flex flex-col items-center gap-2 pt-4 pb-3 fixed top-0 z-50 w-full bg-white
      ${hideBottomNavRoutes.includes(pathname) ? 'shadow-sm shadow-neutral-300' : 'shadow-md shadow-neutral-400'}`}>
      <TopNav/>
      {
        !hideBottomNavRoutes.includes(pathname)
        &&
        <BottomNav/>
      }
    </section>
  )
}

export default Navbar
