
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// sidebar links images
import wishListImg from '../../assets/images/account/sidebar/wish-list.png';
import ordersImg from '../../assets/images/account/sidebar/orders.png';
import returnsImg from '../../assets/images/account/sidebar/returns.png';
import addressesImg from '../../assets/images/account/sidebar/addresses.png';
import paymentImg from '../../assets/images/account/sidebar/payment.png';
import profileImg from '../../assets/images/account/sidebar/profile.png';
import notificationImg from '../../assets/images/account/sidebar/notification.png';
import settingsImg from '../../assets/images/account/sidebar/settings.png';
// sidebar pages
import WishList from './subpages/WishList';
import Orders from './subpages/Orders';
import Returns from './subpages/Returns';
import Addresses from './subpages/Addresses';
import Payment from './subpages/Payment';
import Profile from './subpages/Profile';
import Notification from './subpages/Notification';
import Settings from './subpages/Settings';

function Account() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // make its default to be 'closed' in small screens
  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsSidebarOpen(false);
    }
  }, []);
  // sidebar links
  const sidebarLinks = [
    { image: wishListImg, title: 'Wish List'},
    { image: ordersImg, title: 'Orders'},
    { image: returnsImg, title: 'Returns'},
    { image: addressesImg, title: 'Addresses'},
    { image: paymentImg, title: 'Payment'},
    { image: profileImg, title: 'Profile'},
    { image: notificationImg, title: 'Notification'},
    { image: settingsImg, title: 'Settings'},
  ];
  // subpage
  const [subpage, setSubpage] = useState('wishlist');
  // ---
  return (
    <section className="bg-grayBg min-h-[735px]">
      <div className="pt-[65px] flex flex-start items-start gap-0">
        {/* side bar */}
        <div className="bg-green-500 w-fit fixed sm:relative shadow-md">
          <div className="absolute top-4 right-[-20px]">
            <button onClick={() => {setIsSidebarOpen(!isSidebarOpen);}}
              className="text-2xl w-[20px] h-[35px] text-white bg-neutral-400 hover:bg-yellowPrimary ease-linear duration-150 flex items-center justify-center rounded rounded-tl-none rounded-bl-none">
              {
                isSidebarOpen ?
                <FaAngleLeft /> :
                <FaAngleRight />
              }
            </button>
          </div>
          <div className={`${isSidebarOpen ? '' : 'hidden'} w-[260px] bg-white py-10 px-8`}>
            {/* account + email */}
            <div className="py-5 border-b border-b-neutral-300">
                <p className="text-lg font-bold mb-2">Hello Noor!</p>
                <span className="text-sm text-neutral-500">noor@gmail.com</span>
            </div>
            {/* profile sub pages */}
            <ul className="py-10 flex flex-col gap-1">
              {
                sidebarLinks.map((link, index) => 
                  <li key={index} className={`ps-3 hover:bg-neutral-100 ${subpage === link.title.split(' ').join('').toLocaleLowerCase() ? 'bg-neutral-100' : ''} ease-linear duration-200 rounded`}
                    onClick={() => {
                      setSubpage(link.title.split(' ').join('').toLocaleLowerCase());
                      // close sidebar in small screens where it is fixed
                      if (window.innerWidth < 640) {
                        setIsSidebarOpen(false);
                      }
                    }}>
                    <Link to={`/account`} className="py-3 flex items-center justify-start gap-3 hover:translate-x-3 ease-linear duration-200">
                      <img src={link.image} alt={link.title} className="w-5" />
                      <span className="text-base text-neutral-500 hover:text-black ease-linear duration-150">{link.title}</span>
                    </Link>
                  </li>
                )
              }
            </ul>
            {/* logout */}
            <Link to='/' className="ps-10 text-base text-neutral-500 hover:text-black ease-linear duration-150">
              Sign Out
            </Link>
          </div>
        </div>
        {/* account content */}
        <div className="flex-1 pt-14 px-6 min-h-[705px]">
          {
            subpage === 'wishlist' ?
            <WishList /> :
            subpage === 'orders' ?
            <Orders /> :
            subpage === 'returns' ?
            <Returns /> :
            subpage === 'addresses' ?
            <Addresses /> :
            subpage === 'payment' ?
            <Payment /> :
            subpage === 'profile' ?
            <Profile /> :
            subpage === 'notification' ?
            <Notification /> :
            subpage === 'settings' ?
            <Settings /> : <WishList />
          }
        </div>
      </div>
    </section>
  )
}

export default Account
