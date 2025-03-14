
import { useLocation } from 'react-router-dom';
import TopNav from "./topnav/TopNav";
import BottomNav from "./bottomnav/BottomNav";

function Navbar() {
  const { pathname } = useLocation();
  const hideBottomNavRoutes = ['/cart', '/checkout'];
  return (
    <section className="flex flex-col items-center gap-2 pt-4 pb-3 fixed top-0 z-50 w-full bg-white shadow-md shadow-neutral-400">
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
