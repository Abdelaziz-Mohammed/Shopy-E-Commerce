
import SectionTitle from './SectionTitle';
import ProductsSwiper from './../../../components/productswiper/ProductsSwiper';

function HomeAndKetchen() {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-12">
        <SectionTitle title='Home& Kitchen' />
        <ProductsSwiper />
      </div>
    </section>
  )
}

export default HomeAndKetchen
