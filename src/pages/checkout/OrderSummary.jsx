
import productImmge from '../../assets/images/ProductInCartImage.png'

function OrderSummary() {
  return (
    <div className="flex items-center justify-start gap-3">
      {/* product image */}
      <img src={productImmge} alt="product-image"
        className='w-16'/>
      {/* text */}
      <div className='flex flex-col gap-2'>
        {/* title */}
        <h4 className='text-xs font-semibold'>
          4K UHD LED Smart TV
        </h4>
        {/* count * price */}
        <p className='text-xs'>
            1 x <span className='text-yellowPrimary'>$1,499.99</span>
        </p>
      </div>
    </div>
  )
}

export default OrderSummary
