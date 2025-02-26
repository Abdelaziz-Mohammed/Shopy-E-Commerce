
import { Outlet } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrolltotop/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* scroll to top in all pages */}
      <ScrollToTop />
    </>
  )
}

export default App
