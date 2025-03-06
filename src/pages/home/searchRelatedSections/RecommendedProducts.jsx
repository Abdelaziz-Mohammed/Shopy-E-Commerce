
import ProductsSwiper from '../../../components/productswiper/ProductsSwiper';

function RecommendedProducts() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 pb-12">
        <div>
          <h2 className='section-title pb-3'>Recommended <span className='text-yellowPrimary'>for YOU</span></h2>
          <ProductsSwiper />
        </div>
      </div>
    </section>
  )
}

export default RecommendedProducts
