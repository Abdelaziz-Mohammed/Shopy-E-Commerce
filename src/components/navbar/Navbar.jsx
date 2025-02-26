
import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = ['home', 'cart'];
  return (
    <>
      <div>Navbar</div>
      <ul>
        {
          navLinks.map((link, index) => (
            <li key={index}>
              <Link to={`/${link}`}>{link}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Navbar
