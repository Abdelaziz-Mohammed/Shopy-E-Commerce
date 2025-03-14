
import SectionTitle from "./SectionTitle"
import ProductsSwiper from "../../../components/productswiper/ProductsSwiper"

function Electronics() {
  return (
    <section className="bg-white" id='electronics-section' style={{ scrollMarginTop: '120px' }}>
      <div className="container mx-auto px-2 pb-12">
        <SectionTitle title='Electronics' />
        <ProductsSwiper />
      </div>
    </section>
  )
}

export default Electronics
