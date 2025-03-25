
import paymentImg from '../../../assets/images/account/subpages/payment-img.png';

function Payment() {
  return (
    <div className="flex flex-col gap-5 min-h-[640px]">
      {/* heading */}
      <div className="flex items-center justify-between gap-10">
        <h1 className="account-subpage-title">Saved Cards</h1>
        <button className="text-white bg-[#AA7A24] flex items-center justify-center h-8 sm:h-10 px-2">
          <span className="uppercase text-xs sm:font-medium">Add New Card</span>
        </button>
      </div>
      {/* empty payment */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={paymentImg} alt='wish list is empty'
            className="w-40 sm:w-auto" />
          <h3 className="text-black text-lg sm:text-xl md:text-2xl font-medium sm:font-semibold text-center">
            No saved Cards
          </h3>
          <p className="text-neutral-500 text-base text-center max-w-[300px] sm:max-w-full">
            Cards saved during the checkout process will display here. <br />
            We use encrypted methods to store your details securely
          </p>
        </div>
      </div>
      {/* full payment */}

    </div>
  )
}

export default Payment
