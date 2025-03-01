
import { Link } from "react-router-dom"
import payment1 from '../../assets/images/payment/applepay.png'
import payment2 from '../../assets/images/payment/visa.png'
import payment3 from '../../assets/images/payment/discover.png'
import payment4 from '../../assets/images/payment/mastercard.png'
import payment5 from '../../assets/images/payment/cart.png'

function Footer() {
  const lists = [
    { heading: 'My Account', lis: ['My Account', 'Order History', 'Shoping Cart', 'Wishlist'] },
    { heading: 'Helps', lis: ['Contact', 'Faqs', 'Terms & Condition', 'Privacy Policy'] },
    { heading: 'Proxy', lis: ['About', 'Shop', 'Product', 'Track Order'] },
    { heading: 'Categories', lis: ['Fruit & Vegetables', 'Meat & Fish', 'Bread & Bakery', 'Beauty & Health'] },
  ]
  return (
    <section className="bg-black">
      <div className="container mx-auto px-6 pt-12 pb-6">
        {/* top footer */}
        <div className="text-white flex flex-col sm:flex-row gap-y-10">
          <div className="flex flex-col gap-5">
            <Link to='/'
              className="font-medium text-2xl">
              Shopy
            </Link>
            <p className="text-sm/6 text-neutral-400 max-w-[280px]">
              We are committed to providing you with the best shopping experience
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {
              lists.map((list, index) =>
                <div key={index}>
                  <h3 className="mb-2">{list.heading}</h3>
                  <ul>
                    {
                      list.lis.map((item, index) =>
                        <li key={index}
                          className="text-sm text-neutral-400">
                          {item}
                        </li>
                      )
                    }
                  </ul>
                </div>
              )
            }
          </div>
        </div>
        {/* bottom footer */}
        <div className="flex items-center justify-between border-t border-t-neutral-300 text-xs sm:text-sm text-neutral-400 pt-6 mt-6">
          <p>
            &copy; {new Date().getFullYear()}, All Rights Reserved
          </p>
          <div className="flex items-center justify-center gap-1 sm:gap-3">
            <img src={payment1} alt="pay1"
              className="h-6 sm:h-8 cursor-pointer" />
            <img src={payment2} alt="pay2"
              className="h-6 sm:h-8 cursor-pointer" />
            <img src={payment3} alt="pay3"
              className="h-6 sm:h-8 cursor-pointer" />
            <img src={payment4} alt="pay4"
              className="h-6 sm:h-8 cursor-pointer" />
            <img src={payment5} alt="pay5"
              className="h-6 sm:h-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
