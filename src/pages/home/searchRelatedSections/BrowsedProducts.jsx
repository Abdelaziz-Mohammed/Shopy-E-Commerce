
import ProductsSwiper from "../../../components/productswiper/ProductsSwiper";

function BrowsedProducts() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 pb-16">
        <div>
          <h2 className='section-title pb-3'>BROWESED PRODUCTS</h2>
          <ProductsSwiper />
        </div>
      </div>
    </section>
  )
}

export default BrowsedProducts
