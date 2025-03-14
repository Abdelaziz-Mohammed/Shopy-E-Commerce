
import SectionTitle from "./SectionTitle"
import ProductsSwiper from "../../../components/productswiper/ProductsSwiper"

function Fashion() {
  return (
    <section className="bg-white" id='fashion-section' style={{ scrollMarginTop: '120px' }}>
      <div className="container mx-auto px-2 pb-12">
        <SectionTitle title='Fashion' />
        <ProductsSwiper />
      </div>
    </section>
  )
}

export default Fashion
