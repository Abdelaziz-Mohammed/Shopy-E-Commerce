import { useNavigate } from 'react-router-dom';
import PathNav from './../../components/pathnavigation/PathNav';
import ProductInCart from './ProductInCart';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaMinus, FaPlus } from 'react-icons/fa';

function ShoppingCart() {
  const navigate = useNavigate();
  return (
    <section className="bg-grayBg">
      <div className="container mx-auto px-6 pt-[100px] pb-16">
        <div className='flex flex-col gap-5'>
          <PathNav links={[{ path: '/cart', title: 'Shopping Cart' }]} />
          {/* cart content */}
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* products in cart */}
            <div className='flex-1'>
              <ProductInCart />
              <ProductInCart />
              <ProductInCart />
            </div>
            {/* payment info */}
            <div className='flex flex-col gap-3 lg:max-w-[400px]'>
              {/* coupon code */}
              <div className='flex flex-col gap-2 px-2 py-3 border border-["#BDBDBD"] rounded-lg'>
                <h5 className='text-base font-semibold text-black'>Coupon Code</h5>
                <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-2'>
                  <input type="text"
                    className='sm:flex-1 h-10 w-full border border-["#BDBDBD"] bg-grayBg focus:bg-neutral-50 ease-linear duration-150 outline-none pl-3 rounded' />
                  <button className='h-10 w-full sm:w-auto uppercase text-white text-xs px-3 bg-yellowPrimary rounded'>Apply Coupon</button>
                </div>
              </div>
              {/* cart totals */}
              <div className='flex flex-col gap-2 px-2 py-3 border border-["#E4E7E9"] rounded-lg'>
                <h5 className='text-base font-semibold text-black mb-5'>Cart Totals</h5>
                {/* totals list items */}
                <ul className='flex flex-col gap-3 border-b-2 border-["#BDBDBD"] pb-3'>
                  <li className='flex items-center justify-between'>
                    <span className='text-sm text-neutral-500'>Sub-total</span>
                    <span className='text-sm text-black font-semibold'>$61.99</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span className='text-sm text-neutral-500'>Shipping Fee</span>
                    <span className='text-sm text-black font-semibold'>Free</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span className='text-sm text-neutral-500'>Discount</span>
                    <span className='text-sm text-black font-semibold'>$24</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span className='text-sm text-neutral-500'>Tax</span>
                    <span className='text-sm text-black font-semibold'>$61.99</span>
                  </li>
                </ul>
                {/* total */}
                <div className='flex items-center justify-between mt-2 mb-6'>
                  <span>Total</span>
                  <span className='font-semibold hover:text-green-600 ease-linear duration-150'>$357.99 USD</span>
                </div>
                {/* checkout button */}
                <button onClick={() => navigate('/checkout')}
                  className='uppercase text-white text-sm font-semibold px-3 bg-yellowPrimary h-12 rounded
                    flex items-center justify-center gap-2'>
                  Proceed To Checkout <FaArrowRightLong />
                </button>
              </div>
              {/* order info */}
              <div className='mt-5'>
                <h4 className='text-black text-base font-semibold capitalize pb-2 border-b-2 border-b-["#BDBDBD"]'>Order Information</h4>
                <div className='text-[#909090] pt-4 pb-2 border-b-2 border-b-["#BDBDBD"]'>
                  <div className='flex items-center justify-between gap-5 mt-3 text-base'>
                    <h5 className='capitalize text-sm font-medium mb-2'>Return Policy</h5>
                    <button className='text-xs w-5 h-5 hover:bg-neutral-50 ease-linear duration-150
                      flex items-center justify-center rounded-full'>
                      <FaMinus className='text-xs' />
                    </button>
                  </div>
                  <p className='text-sm'>
                    This is our example return policy which is 
                    everything you need to know about our returns.
                  </p>
                </div >
                <div className='flex items-center justify-between gap-5 mt-3 text-base text-[#909090] pt-2 pb-1 border-b-2 border-b-["#BDBDBD"]'>
                  <h5 className='capitalize text-sm font-medium mb-2'>Shipping Options</h5>
                  <button className='text-xs w-5 h-5 hover:bg-neutral-50 ease-linear duration-150
                    flex items-center justify-center rounded-full'>
                    <FaPlus className='text-xs' />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* empty cart content */}
          {
            // condition for empty cart here
            <div className='w-full px-5 py-10 border border-neutral-200 hover:bg-neutral-50 rounded flex flex-col items-center justify-center gap-5'>
              <p className='text-neutral-700 text-["#000"] font-medium'>Your Cart Is Empty</p>
              <button className='text-white uppercase font-semibold bg-yellowPrimary hover:bg-black rounded-lg px-5 h-10 ease-linear duration-150'>
                Shop Now
              </button>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart
