
import { Link } from 'react-router-dom';
import { FaRegBell, FaRegHeart, FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

function TopNav() {
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto px-6">
        <div className='flex items-center justify-between gap-5'>
          {/* logo */}
          <Link to='/'>
            <img src="logo.svg" alt="Shopy" className='w-[80px] sm:w-auto' />
          </Link>
          {/* search box */}
          <div className='hidden flex-1 sm:flex items-center justify-center gap-1 max-w-[800px] border border-neutral-300 focus-within:border-neutral-500 hover:border-yellowPrimary ease-linear duration-100 px-2 rounded-3xl'>
            <input type="text" placeholder='Search for any thing'
              className='flex-1 pl-3 py-1 text-black text-base rounded-3xl outline-none placeholder:text-neutral-400 placeholder:text-sm' />
            <FaSearch className='text-neutral-400 cursor-pointer hover:text-yellowPrimary transition' />
          </div>
          {/* signin + notification + favorites + cart */}
          <div className='flex items-center justify-center gap-3 text-black'>
            <Link to='/signin'
              className='text-base sm:text-lg font-medium hover:text-yellowPrimary transition'>
              Sign in
            </Link>
            {
              (window.innerWidth < 640)
              &&
              <IoSearch className='cursor-pointer text-2xl font-light hover:text-yellowPrimary transition' />
            }
            <FaRegBell className='cursor-pointer text-xl hover:text-yellowPrimary transition sm:text-2xl' />
            <FaRegHeart className='cursor-pointer text-xl hover:text-yellowPrimary transition sm:text-2xl' />
            <Link to='/cart'>
              <FiShoppingCart className='cursor-pointer text-xl hover:text-yellowPrimary transition sm:text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopNav
