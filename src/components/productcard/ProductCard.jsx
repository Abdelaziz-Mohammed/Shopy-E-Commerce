
import { FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa"
import productImg from '../../assets/images/products/product-img-1.png';

function ProductCard() {
  return (
    <div className="w-[300px] rounded-lg shadow-md">
      {/* image */}
      <div className="bg-grayBg pt-10 relative flex items-center justify-center rounded-lg rounded-bl-none rounded-br-none cursor-pointer group">
        {/* discount */}
        <span className="text-white bg-yellowPrimary px-2 rounded absolute top-3 left-3 z-10">-20 %</span>
        {/* favourite */}
        <div className="bg-white rounded w-7 h-7 flex items-center justify-center absolute top-3 right-3 cursor-pointer z-10">
            <FaRegHeart className="text-neutral-500 text-xl hover:text-red-500 ease-linear duration-150" />
        </div>
        {/* img */}
        <img src={productImg} alt="product-title" />
        {/* cart icon on hover */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300
          rounded-lg rounded-bl-none rounded-br-none">
          <button className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-200">
            <FaShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
      {/* text */}
      <div className="flex flex-col gap-1 bg-white rounded-lg rounded-tl-none rounded-tr-none px-4 py-3">
        {/* title */}
        <h3 className="font-bold text-lg">Soft Printed T-shirt</h3>
        {/* price */}
        <div className="flex items-center justify-start gap-2">
          <span className="text-lg text-black uppercase font-semibold">EGP</span>
          {/* price after discount */}
          <span className="font-bold text-xl text-black">160</span>
          {/* price before discount */}
          <span className="text-neutral-400 line-through">200</span>
        </div>
        {/* rating */}
        <div className="flex items-center justify-start gap-1">
          <FaStar className="text-yellow-500 text-lg" />
          <FaStar className="text-yellow-500 text-lg" />
          <FaStar className="text-yellow-500 text-lg" />
          <FaStar className="text-yellow-500 text-lg" />
          <FaStar className="text-yellow-500 text-lg" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
