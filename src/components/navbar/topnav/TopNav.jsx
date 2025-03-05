
import { Link } from 'react-router-dom';
import { FaRegBell, FaRegHeart, FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

function TopNav() {
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto px-6">
        <div className='flex items-center justify-between gap-5'>
          {/* logo */}
          <Link to='/'>
            <img src="logo.svg" alt="Shopy" />
          </Link>
          {/* search box */}
          <div className='hidden flex-1 sm:flex items-center justify-center gap-1 border border-neutral-300 focus-within:border-neutral-500 ease-linear duration-100 px-2 rounded-3xl'>
            <input type="text" placeholder='Search for any thing'
              className='flex-1 pl-3 py-1 text-black text-base rounded-3xl outline-none placeholder:text-neutral-400 placeholder:text-base' />
            <FaSearch className='text-neutral-400' />
          </div>
          {/* signin + notification + favorites + cart */}
          <div className='flex items-center justify-center gap-3 text-xl'>
            <Link to='/signin'
              className='text-base text-black font-medium'>
              Sign in
            </Link>
            <FaRegBell className='cursor-pointer' />
            <FaRegHeart className='cursor-pointer' />
            <FiShoppingCart className='cursor-pointer' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopNav
