
import { FaMinus, FaPlus } from "react-icons/fa"
import { FiTrash } from "react-icons/fi"
import { TbHeartPlus } from "react-icons/tb"
// image for testing
import productImmge from '../../assets/images/ProductInCartImage.png'

function ProductInCart() {
  return (
    <div className="flex flex-col gap-5 p-5 border-b-2 border-b-['#E4E7E9] bg-white">
      {/* product image + text info */}
      <div className="flex items-start justify-center gap-5">
        {/* make it link to product detail later */}
        <img src={productImmge} alt='product-image'
          className="w-[80px] sm:w-[120px]" />
        <div className="flex-1 flex flex-col gap-3">
          {/* dynamic title */}
          <h3 className="text-sm font-medium sm:text-base">
            4K UHD LED Smart TV
          </h3>
          {/* pricing */}
          <div className="flex items-center justify-start gap-2">
            <span className="text-['#000'] text-xs font-medium">EGP</span>
            <span className="text-['#000'] text-sm sm:text-base font-semibold">1699</span>
            <span className="line-through text-neutral-500 text-xm sm:text-sm">1999.00</span>
            <span className="text-yellowPrimary text-xs">-20% OFF</span>
          </div>
        </div>
      </div>
      {/* dec + count + inc | favouriets + delete */}
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center justify-center gap-0 border border-['#E4E7E9]">
          <div className="bg-white flex items-center justify-center w-10 h-10 cursor-pointer text-xs hover:bg-red-600 hover:text-white hover:border-red-600 ease-linear duration-100">
            <FaMinus />
          </div>
          <div className="bg-white flex items-center justify-center min-w-10 px-1 h-10 text-sm font-medium">
            {/* dynamic count */}
            <span>1</span>
          </div>
          <div className="bg-white flex items-center justify-center w-10 h-10 cursor-pointer text-xs hover:bg-green-600 hover:text-white hover:border-green-600 ease-linear duration-100">
            <FaPlus />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer
            border border-['#E4E7E9] hover:bg-green-600 hover:text-white hover:border-green-600 ease-linear duration-100">
            <TbHeartPlus />
          </div>
          <div className="flex items-center justify-center w-10 h-10 cursor-pointer
            border border-['#E4E7E9] hover:bg-red-600 hover:text-white hover:border-red-600 ease-linear duration-100">
            <FiTrash />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInCart
