
import { Link } from "react-router-dom";

function BottomNav() {
  const links = ['Home', 'Special Offers', 'About', 'Contact'];
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto px-6">
        <ul className="flex items-center justify-center gap-4 sm:gap-10">
          {
            links.map((link, index) =>
              <li key={index}>
                <Link to='/'
                  className="text-sm md:text-base text-black font-normal">
                  {link}
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default BottomNav
