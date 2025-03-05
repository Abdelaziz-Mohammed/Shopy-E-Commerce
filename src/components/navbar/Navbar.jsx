
import TopNav from "./topnav/TopNav";
import BottomNav from "./bottomnav/BottomNav";

function Navbar() {
  return (
    <section className="flex flex-col items-center gap-3 pt-8 pb-4 fixed top-0 z-50 w-full bg-white shadow-md shadow-neutral-400">
      <TopNav/>
      <BottomNav/>
    </section>
  )
}

export default Navbar
