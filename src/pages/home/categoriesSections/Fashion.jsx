
import SectionTitle from "./SectionTitle"
import ProductsSwiper from "../../../components/productswiper/ProductsSwiper"

function Fashion() {
  return (
    <section className="bg-white">
      <div className="container mx-auto pb-16">
        <SectionTitle title='Fashion' />
        <ProductsSwiper />
      </div>
    </section>
  )
}

export default Fashion
