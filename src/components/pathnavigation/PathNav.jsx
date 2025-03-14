
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { RiHome2Line } from 'react-icons/ri';
import { FaAngleRight } from 'react-icons/fa';

function PathNav({ links }) {
  return (
    <div className='flex items-center justify-start gap-1 bg-[#FBF7EB] px-2 py-5 mb-5'>
      <Link to='/home'
        className='flex items-center justify-start gap-1 text-[#5F6C72] hover:text-yellowPrimary ease-linear duration-100
          text-xs sm:text-sm'>
        <RiHome2Line className='text-2xl' />
        Home
      </Link>
      {
        links.map((link, index) => 
          <Link to={link.path} key={index}
            className='flex items-center justify-start gap-1 text-[#5F6C72] hover:text-yellowPrimary ease-linear duration-100 last:text-yellowPrimary last:font-medium
              text-xs sm:text-sm'>
            <FaAngleRight className='text-base' />
            {link.title}
          </Link>
        )
      }
    </div>
  )
}

PathNav.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PathNav
