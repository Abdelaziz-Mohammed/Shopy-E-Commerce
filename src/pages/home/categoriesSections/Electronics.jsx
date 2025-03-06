
import SectionTitle from "./SectionTitle"
import ProductsSwiper from "../../../components/productswiper/ProductsSwiper"

function Electronics() {
  return (
    <section className="bg-white">
      <div className="container mx-auto pb-12">
        <SectionTitle title='Electronics' />
        <ProductsSwiper />
      </div>
    </section>
  )
}

export default Electronics
