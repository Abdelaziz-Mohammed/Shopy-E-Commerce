
import returnsImg from '../../../assets/images/account/subpages/returns-img.png';

function Returns() {
  return (
    <div className="flex flex-col gap-5 min-h-[640px]">
      {/* heading */}
      <div className="flex flex-col gap-2">
        <h1 className="account-subpage-title">Returns</h1>
        <p className="text-sm text-neutral-500">
          View your returns history or file a new return
        </p>
      </div>
      {/* empty returns */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={returnsImg} alt='wish list is empty'
            className="w-40 sm:w-auto max-w-[160px] max-h-[200px]" />
          <h3 className="text-black text-lg sm:text-xl md:text-2xl font-medium sm:font-semibold text-center">
            No returns requested
          </h3>
          <p className="text-neutral-500 text-base text-center max-w-[300px] sm:max-w-full">
            You have not requested any previous returns
          </p>
          <button className="text-white bg-yellowPrimary flex items-center justify-center h-10 px-5 rounded-lg mt-5">
            <span className="uppercase text-sm font-medium">Creat a new return</span>
          </button>
        </div>
      </div>
      {/* full returns */}

    </div>
  )
}

export default Returns
