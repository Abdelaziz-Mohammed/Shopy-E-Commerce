
import { GoShareAndroid } from "react-icons/go"
import { HiDotsHorizontal } from "react-icons/hi"
import wishlistImg from '../../../assets/images/account/subpages/wishlist-img.png';

function WishList() {
  return (
    <div className="flex flex-col gap-5 min-h-[640px]">
      {/* heading */}
      <div className="flex items-center justify-between gap-5">
        <h1 className="account-subpage-title">Wish List</h1>
        <div className="flex items-center justify-center gap-3">
          <button className="text-black flex items-center justify-center gap-1 h-8 md:h-10 px-3 md:px-5 rounded-3xl border border-neutral-300
            hover:border-neutral-500 hover:bg-neutral-50 ease-linear duration-200 text-xs md:text-sm">
            <GoShareAndroid className="text-lg" />
            <span>Share</span>
          </button>
          <button className="text-black flex items-center justify-center gap-1 h-8 md:h-10 px-3 md:px-5 rounded-3xl border border-neutral-300
            hover:border-neutral-500 hover:bg-neutral-50 ease-linear duration-200 text-xs md:text-sm">
            <HiDotsHorizontal className="text-lg" />
            <span>More</span>
          </button>
        </div>
      </div>
      {/* empty wish list */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={wishlistImg} alt='wish list is empty'
            className="w-40 sm:w-auto max-w-[180px]" />
          <h3 className="text-black text-lg sm:text-xl md:text-2xl font-medium sm:font-semibold text-center">
            Ready to Make a wish list ?
          </h3>
          <p className="text-neutral-500 text-base text-center max-w-[300px] sm:max-w-full">
            Start adding items you love to your wishlist by tapping on the heart icon
          </p>
          <button className="text-white bg-yellowPrimary flex items-center justify-center h-10 px-5 rounded-lg mt-5">
            <span className="uppercase text-sm font-medium">Creat new wish list</span>
          </button>
        </div>
      </div>
      {/* full wish list */}

    </div>
  )
}

export default WishList
