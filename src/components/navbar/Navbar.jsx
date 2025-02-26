
import TopNav from "./topnav/TopNav";
import BottomNav from "./bottomnav/BottomNav";

function Navbar() {
  return (
    <section className="flex flex-col items-center gap-5 py-5 fixed top-0 w-full bg-white shadow-md shadow-neutral-400">
      <TopNav/>
      <BottomNav/>
    </section>
  )
}

export default Navbar
