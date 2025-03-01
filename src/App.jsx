
import { Outlet, useLocation } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrolltotop/ScrollToTop';

function App() {
  const { pathname } = useLocation();
  const hideNavbarRoutes = ['/signin', '/signup', '/passwordreset', '/checkemail', '/setnewpassword', '/resetsuccessfully'];
  const hideFooterRoutes = ['/signin', '/signup', '/passwordreset', '/checkemail', '/setnewpassword', '/resetsuccessfully'];
  return (
    <>
      {
        !hideNavbarRoutes.includes(pathname)
        &&
        <Navbar />
      }
      <Outlet />
      {
        !hideFooterRoutes.includes(pathname)
        &&
        <Footer />
      }
      {/* scroll to top in all pages */}
      <ScrollToTop />
    </>
  )
}

export default App
